import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import moment from 'moment-timezone';
import NoSsr from '@material-ui/core/NoSsr';

import News   from './News/News';
import Map    from './Map';
import Table from './Table';
import LineChart from './LineChart';
import CountryBar from './CountryBar'
import Card from './Card'

import './Page.css'


function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('MM/DD') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}

class Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            //button click
            activeButton: "total",
            // map data
            data: null,
            summary: null,
            yesterdaySummary: null,
            choosenCategory : 'TotalCases',
            maxColor: '#F2994A',
            minColor: '#FBE69E',
            updatedTime: null,
            // getting the array of the history form 3-13 till now 
            CasesArray: null,
            DeathArray: null,
            RecoveredArray: null,

            datePeriod: null,
            countrySelection: null,
            chosenCountry: 'Total',
            today: null,
            yesterday: null,
            label: "Total:",
            todayData: null,
            yesterdayData: null
        }
        this.returnLabel = this.returnLabel.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.extractData = this.extractData.bind(this);
    }

    returnLabel(label) {
        this.setState({
            label: label
        })
    }

    componentDidMount(){
        const today = moment.utc().format('YYYY-MM-DD');
        // const yesterday = moment.utc().subtract(1, 'days').format('YYYY-MM-DD');
        const requestForToday = Axios.get("http://18.218.58.203:8000/entries/" + today);
        // const requestForYesterday = Axios.get("http://18.218.58.203:8000/entries/" + yesterday);
        const requestForTotal = Axios.get("http://18.218.58.203:8000/entries/");

        Axios.all([requestForToday, requestForTotal])
            .then(Axios.spread((...responses) => {
                const requestForToday = responses[0];
                const requestForTotal = responses[1];
                // console.log(requestForTotal);
                let CasesArray = [];
                let DeathArray = [];
                let RecoveredArray = [];
                let countrySelection = [];
                
                // get the summary array from get all the data
                requestForTotal.data.map((data) => {
                    let currentData = this.extractData(data, this.state.label)
                    CasesArray.push(currentData.TotalCases);
                    DeathArray.push(currentData.TotalDeaths);
                    RecoveredArray.push(currentData.TotalRecovered)
                })

                // get today's data 
                const localData = requestForToday.data.trk;
                let summary = localData[localData.length-1];
                let diff = requestForToday.diff;

                //get country selection data
                requestForToday.data.trk.map((data) => {
                    let code = data.id;
                    let label = data.name;
                    let temp = {"code": code, "label": label};
                    if (temp.code != null) {
                        countrySelection.push(temp);
                    }
                })

                const todayData = requestForToday.data;
                const totalData = requestForTotal.data;
                const yesterdayData = requestForTotal.data[requestForTotal.data.length - 2];
                // console.log(yesterday);

                this.props.getUpdate(moment(requestForToday.data.updatedAt).tz('America/Vancouver').format('YYYY-MM-DD hh:mm a z'))

                this.setState({
                    data: localData,
                    summary: summary,
                    diff: diff,
                    updatedTime: moment(requestForToday.data.updatedAt).tz('America/Vancouver').format('YYYY-MM-DD hh:mm'),
                    CasesArray: CasesArray,
                    DeathArray: DeathArray,
                    RecoveredArray: RecoveredArray,
                    datePeriod: getDates("2020-03-03", moment(requestForToday.data.updatedAt).format("YYYY-MM-DD").toString()),
                    countrySelection: countrySelection,
                    todayData: todayData,
                    yesterdayData: yesterdayData,
                    totalData: totalData,
                    today: this.extractData(todayData, 'Total:'),
                    yesterday: this.extractData(yesterdayData, 'Total:')
                })
            })).catch(errors => {
                console.log(errors)
            })
    }

    // return obj in the trk
    extractData(data, country) {
        return data.trk.find((item) => {
            return item.name == country
        })
    }

    handleCountryChange(country) {
        // console.log(country)
        let CasesArray = [];
        let DeathArray = [];
        let RecoveredArray = [];

        this.state.totalData.map((data) => {
            let currentData = this.extractData(data, country)
            CasesArray.push(currentData.TotalCases);
            DeathArray.push(currentData.TotalDeaths);
            RecoveredArray.push(currentData.TotalRecovered)
        })

        this.setState({
            CasesArray: CasesArray,
            DeathArray: DeathArray,
            RecoveredArray: RecoveredArray,
            today: this.extractData(this.state.todayData, country),
            yesterday: this.extractData(this.state.yesterdayData, country)
        })
    }

    render() {
        // const yesterday = moment.utc().subtract(1, 'days').format('YYYY-MM-DD');
        return (
            <div >
                <Route exact path="/">
                    <NoSsr>
                        {this.state.summary &&
                            <div>
                                <div className="inner-container">
                                    <div className="summary">
                                        <span className="title">Overview</span>
                                        <CountryBar countries={this.state.countrySelection} onClick={this.handleCountryChange}/>
                                        <Card today={this.state.today} yesterday={this.state.yesterday}/>
                                    </div>

                                    <div className="line-chart">
                                        <LineChart totalCasesArray={this.state.CasesArray} totalDeathArray={this.state.DeathArray} totalRecoveredArray={this.state.RecoveredArray} datePeriod={this.state.datePeriod}/>
                                    </div>

                                    <div className="data-map">
                                        <span className="title">Map</span>
                                        <div className="map-buttons">
                                            <button 
                                                className={"total-map-button" + (this.state.activeButton === "total" ? " total-active" : "")}
                                                onClick={() => this.setState({
                                                    activeButton: "total",
                                                    choosenCategory: "TotalCases",
                                                    maxColor: "#F2994A",
                                                    minColor: "#FBE69E"                         
                                                })}
                                            >Total Cases</button>
                                            <button 
                                                className={"death-map-button" + (this.state.activeButton === "death" ? " death-active" : "")}
                                                onClick={() => this.setState({
                                                    activeButton: "death",
                                                    choosenCategory: "TotalDeaths",
                                                    maxColor: "#333333",
                                                    minColor: "#BCBCBC"                                         
                                            })}
                                            >Deaths</button>
                                            <button 
                                                className={"recovered-map-button" + (this.state.activeButton === "recovered" ? " recovered-active" : "")}
                                                onClick={() => this.setState({
                                                    activeButton: "recovered",
                                                    choosenCategory: "TotalRecovered",
                                                    maxColor: "#27AE60",
                                                    minColor: "#92DEB2"  
                                            })}
                                            >Recovered</button>
                                        </div>
                                        <Map input={ this.state.data} catorgry={this.state.choosenCategory} maxColor={this.state.maxColor} minColor={this.state.minColor}/>
                                    </div>

                                    <div className="data-chart">
                                        <span className="title">Rank</span>
                                        <Table data={this.state.data} />
                                    </div>
                                    <div className="hint">
                                        <span >*The data may not be the most accurate due to update delay</span>
                                    </div>
                                </div>
                            </div>
                        }
                    </NoSsr>
                </Route>
                <Route path="/news">
                    <NoSsr>
                        <News/>
                    </NoSsr>
                </Route>
            </div>    
        )
    }
}

export default Page;