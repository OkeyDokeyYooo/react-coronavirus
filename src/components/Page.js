import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import moment from 'moment-timezone';
import NoSsr from '@material-ui/core/NoSsr';

import News   from './News/News';
import Map    from './Map';
import Chart from './Chart';
import LineChart from './LineChart';
import CountryBar from './CountryBar'
// import SummaryBoard from './SummaryBoard/SummaryBoard'
import TempBoard from './SummaryBoard/TempBoard.js';
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
            data: null,
            summary: null,
            yesterdaySummary: null,
            choosenCategory : 'TotalCases',
            maxColor: '#660000',
            minColor: '#FFCCCC',
            updatedTime: null,
            totalCasesArray: null,
            totalDeathArray: null,
            totalRecoveredArray: null,
            datePeriod: null,
            countrySelection: null,
            chosenCountry: 'Total',
            today: null,
            yesterday: null

        }
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(catorgry, maxColor, minColor){
    //     this.setState({
    //         choosenCategory: catorgry,
    //         maxColor: maxColor,
    //         minColor: minColor
    //     })
    // }

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
                let totalCasesArray = [];
                let totalDeathArray = [];
                let totalRecoveredArray = [];
                let countrySelection = [];
                
                // get the summary array from get all the data
                requestForTotal.data.map((data) => {
                    let summary = data.trk.pop();
                    totalCasesArray.push(summary.TotalCases);
                    totalDeathArray.push(summary.TotalDeaths);
                    totalRecoveredArray.push(summary.TotalRecovered)
                })

                // get today's data 
                const localData = requestForToday.data.trk;
                let summary = localData.pop();
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

                const yesterday = requestForTotal.data[requestForTotal.data.length - 2];
                // console.log(yesterday);

                this.props.getUpdate(moment(requestForToday.data.updatedAt).tz('America/Vancouver').format('YYYY-MM-DD hh:mm a z'))

                this.setState({
                    data: localData,
                    summary: summary,
                    diff: diff,
                    updatedTime: moment(requestForToday.data.updatedAt).tz('America/Vancouver').format('YYYY-MM-DD hh:mm'),
                    totalCasesArray: totalCasesArray,
                    totalDeathArray: totalDeathArray,
                    totalRecoveredArray: totalRecoveredArray,
                    datePeriod: getDates("2020-03-03", moment(requestForToday.data.updatedAt).format("YYYY-MM-DD").toString()),
                    countrySelection: countrySelection,
                    today: requestForToday.data,
                    yesterday: yesterday
                })
            })).catch(errors => {
                console.log(errors)
            })
    }

    render() {
        console.log(this.state);
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
                                        <CountryBar countries={this.state.countrySelection}/>
                                        <Card today={this.state.summary} yesterday={this.state.yesterday}/>
                                    </div>

                                    <div className="line-chart">
                                        <LineChart totalCasesArray={this.state.totalCasesArray} totalDeathArray={this.state.totalDeathArray} totalRecoveredArray={this.state.totalRecoveredArray} datePeriod={this.state.datePeriod}/>
                                    </div>

                                    <div className="data-map">
                                        <span className="title">Map</span>
                                        <Map input={ this.state.data} catorgry={this.state.choosenCategory} maxColor={this.state.maxColor} minColor={this.state.minColor}/>
                                    </div>

                                    <div className="data-chart">
                                        <span className="title">Rank</span>
                                        <Chart data={this.state.data} />
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