import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import moment, { months } from 'moment-timezone';
import NoSsr from '@material-ui/core/NoSsr';
import ReactLoading from 'react-loading';
import { withTranslation } from 'react-i18next';

import News   from './News/News';
import Map    from './Map';
import Table from './Table';
import LineChart from './LineChart';
import CountryBar from './CountryBar'
import Card from './Card'
import './Page.css'

const Loading = ({type, color}) => (
    <div className="fade-in-and-out loading-logo">
        <ReactLoading type={type} color={color} className={"loading-logo-pos"}/>
        <div className={"loading-logo-pos"}>Fetching Data</div>
    </div>
) 

function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stop = moment(stopDate);
    while (currentDate <= stop) {
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
            yesterdayData: null,
            loadingDone: undefined,
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
        const requestForToday = Axios.get("https://api.covid19.hackhub.cn/entries/" + today);
        // const requestForYesterday = Axios.get("http://18.218.58.203:8000/entries/" + yesterday);
        const requestForTotal = Axios.get("https://api.covid19.hackhub.cn/entries/");

        setTimeout(() => { Axios.all([requestForToday, requestForTotal])
            .then(Axios.spread((...responses) => {
                const requestForToday = responses[0];
                const requestForTotal = responses[1];
                let CasesArray = [];
                let DeathArray = [];
                let RecoveredArray = [];
                let countrySelection = [];
                
                // get the summary array from get all the data
                const monthAgo = moment.utc().subtract(1, 'months').format('YYYY-MM-DD')
                console.log(monthAgo)
                const pastAMonthData = requestForTotal.data.filter(data => {
                    return moment(data._id).isAfter(monthAgo)
                })
                console.log(pastAMonthData)
                pastAMonthData.map((data) => {
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
                    data: localData.slice(0,localData.length-1),
                    summary: summary,
                    diff: diff,
                    updatedTime: moment(requestForToday.data.updatedAt).tz('America/Vancouver').format('YYYY-MM-DD hh:mm'),
                    CasesArray: CasesArray,
                    DeathArray: DeathArray,
                    RecoveredArray: RecoveredArray,
                    datePeriod: getDates(monthAgo, moment(requestForToday.data.updatedAt).format("YYYY-MM-DD").toString()),
                    countrySelection: countrySelection,
                    todayData: todayData,
                    yesterdayData: yesterdayData,
                    totalData: totalData,
                    today: this.extractData(todayData, 'Total:'),
                    yesterday: this.extractData(yesterdayData, 'Total:')
                })
            })).then(this.setState({loadingDone: true})).catch(errors => {
                console.log(errors)
            })}, 2000)
    }

    // return obj in the trk
    extractData(data, country) {
        return data.trk.find((item) => {
            return item.name === country
        })
    }

    handleCountryChange(country) {
        console.log(country)
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
        const { t } = this.props;
        const isMobile = window.innerWidth <= 500;
        return (
            <div className="page">
                {
                    !this.state.loadingDone 
                    ?<Loading color={'black'} type={'bars'}/>
                    :<div className="page-content">
                        <Route exact path="/">
                            <NoSsr>
                                {this.state.summary &&
                                    <div className="inner-container">
                                        <div className="summary">
                                        <span className="title">{t("overview.label")}</span>
                                            <CountryBar countries={this.state.countrySelection} onClick={this.handleCountryChange} lang={this.props.lang}/>
                                            <Card today={this.state.today} yesterday={this.state.yesterday}/>
                                            { !isMobile &&
                                                    <div className="hint">
                                                        <span >{t("hint.label")}</span>
                                                    </div>
                                            }
                                        </div>
        
                                        <div className="line-chart">
                                            <LineChart 
                                                totalCasesArray={this.state.CasesArray} 
                                                totalDeathArray={this.state.DeathArray} 
                                                totalRecoveredArray={this.state.RecoveredArray} 
                                                datePeriod={this.state.datePeriod}
                                                totalCasesLabel={this.props.lang === "en" ? "Total Cases" : "累计病例"}
                                                totalDeathsLabel={this.props.lang === "en" ? "Total Deaths" : "累计死亡"}
                                                totalRecoveredLabel={this.props.lang === "en" ? "Total Recovered" : "累计治愈"}/>
                                        </div>
        
                                        <div className="data-map">
                                            <span className="title">{t('map.label')}</span>
                                            <div className="map-buttons">
                                                <button 
                                                    className={"total-map-button" + (this.state.activeButton === "total" ? " total-active" : "")}
                                                    onClick={() => this.setState({
                                                        activeButton: "total",
                                                        choosenCategory: "TotalCases",
                                                        maxColor: "#F2994A",
                                                        minColor: "#FBE69E"                         
                                                    })}
                                                >{t("totalCases.label")}</button>
                                                <button 
                                                    className={"death-map-button" + (this.state.activeButton === "death" ? " death-active" : "")}
                                                    onClick={() => this.setState({
                                                        activeButton: "death",
                                                        choosenCategory: "TotalDeaths",
                                                        maxColor: "#333333",
                                                        minColor: "#BCBCBC"                                         
                                                })}
                                                >{t("Deaths.label")}</button>
                                                <button 
                                                    className={"recovered-map-button" + (this.state.activeButton === "recovered" ? " recovered-active" : "")}
                                                    onClick={() => this.setState({
                                                        activeButton: "recovered",
                                                        choosenCategory: "TotalRecovered",
                                                        maxColor: "#27AE60",
                                                        minColor: "#92DEB2"  
                                                })}
                                                >{t("Recovered.label")}</button>
                                            </div>
                                            <Map input={ this.state.data} catorgry={this.state.choosenCategory} maxColor={this.state.maxColor} minColor={this.state.minColor} lang={this.props.lang=== "zh" ? "zh" : "en"}/>
                                        </div>
        
                                        <div className="data-chart">
                                            <span className="title">{t("rank.label")}</span>
                                            <Table data={this.state.data} lang={this.props.lang}/>
                                        </div>
                                        {
                                            isMobile &&
                                            <div className="hint">
                                                    <span >{t("hint.label")}</span>
                                            </div>
                                        }
                                    </div>
                                }
                            </NoSsr>
                        </Route>
                        <Route path="/news">
                            <NoSsr>
                                <News lang={this.props.lang}/>
                            </NoSsr>
                        </Route>
                    </div>
                }
            </div>    
        )
    }
}

export default withTranslation()(Page);