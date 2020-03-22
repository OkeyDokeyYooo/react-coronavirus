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
import TempBoard from './SummaryBoard/TempBoard.js'

import './Page.css'



function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('MM-DD') )
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
            countrySelection: null
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
        const requestForToday = Axios.get("http://18.218.58.203:8000/entries/" + today);
        const requestForTotal = Axios.get("http://18.218.58.203:8000/entries/");

        Axios.all([requestForToday, requestForTotal])
            .then(Axios.spread((...responses) => {
                const requestForToday = responses[0];
                const requestForTotal = responses[1];
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

                this.setState({
                    data: localData,
                    summary: summary,
                    diff: diff,
                    updatedTime: moment(requestForToday.data.updatedAt).tz('America/Vancouver').format('YYYY-MM-DD hh:mm'),
                    totalCasesArray: totalCasesArray,
                    totalDeathArray: totalDeathArray,
                    totalRecoveredArray: totalRecoveredArray,
                    datePeriod: getDates("2020-03-03", moment(requestForToday.data.updatedAt).format("YYYY-MM-DD").toString()),
                    countrySelection: countrySelection
                })
            })).catch(errors => {
                console.log(errors)
            })
        // Axios.get(request)
        //     .then(res => {
        //         if (res.data != null ) {
        //             const localData = res.data.trk;
        //             let summary = localData.pop()
        //             let diff = res.data.diff
        //             this.setState({
        //                 data: localData,
        //                 summary: summary,
        //                 diff: diff,
        //                 updatedTime: moment(res.data.updatedAt).tz('America/Vancouver').format('YYYY-MM-DD hh:mm')
        //             })
        //         }
        //     })
    }

    render() {
        // console.log(this.state.countrySelection);
        return (
            <div >
                <Route exact path="/">
                    <NoSsr>
                        {this.state.summary &&
                            <div>
                                {/* <TempBoard input={this.state.summary} diff={this.state.diff} updatedAt={this.state.updatedTime}/> */}
                                <div className="inner_container">
                                    <div>
                                        <LineChart totalCasesArray={this.state.totalCasesArray} totalDeathArray={this.state.totalDeathArray} totalRecoveredArray={this.state.totalRecoveredArray} datePeriod={this.state.datePeriod}/>
                                    </div>
                                    <div>
                                        <CountryBar countries={this.state.countrySelection}/>
                                    </div>
                                    {/* <div className="data_chart">
                                        <div className="title">
                                            <span>Table</span>
                                        </div>
                                        <Chart data={this.state.data} />
                                    </div>

                                    <div className="data_map">
                                        <div className="title">
                                            <span>Map</span>
                                        </div>
                                        <Map input={ this.state.data} catorgry={this.state.choosenCategory} maxColor={this.state.maxColor} minColor={this.state.minColor}/>
                                    </div> */}
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