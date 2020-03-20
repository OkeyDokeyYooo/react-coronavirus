import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import moment from 'moment-timezone';
import NoSsr from '@material-ui/core/NoSsr';

import News   from './News/News';
import Map    from './Map';
import Chart from './Chart';
import SummaryBoard from './SummaryBoard/SummaryBoard'
import TempBoard from './TempBoard.js'

import './Page.css'

class Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            summary: null,
            yesterdaySummary: null,
            choosenCategory : 'TotalCases',
            maxColor: '#660000',
            minColor: '#FFCCCC'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(catorgry, maxColor, minColor){
        this.setState({
            choosenCategory: catorgry,
            maxColor: maxColor,
            minColor: minColor
        })
    }

    // componentDidMount(){
    //     const today = moment.utc().format('YYYY-MM-DD')
    //     const request = "http://18.218.58.203:8000/entries/" + today

    //     Axios.get(request)
    //         .then(res => {
    //             if (res.data != null ) {
    //                 const localData = res.data.trk;
    //                 let summary = localData.pop()
    //                 let diff = res.data.diff
    //                 this.setState({
    //                     data: localData,
    //                     summary: summary,
    //                     diff: diff
    //                 })
    //             }
    //         })
    // }

    render() {
        return (
            <div >
                <Route exact path="/">
                    <NoSsr>
                    <div >
                        {/* {
                            this.state.summary &&
                            <SummaryBoard input={this.state.summary} diff={this.state.diff} handleClick={this.handleClick}/>
                        } */}
                        <TempBoard input={this.state.summary} diff={this.state.diff}/>
                        {/* <div className="inner_container">
                            <div className="data_chart">
                                {
                                    this.state.data &&
                                    <Chart data={this.state.data} />
                                }
                            </div>
                            <div className="data_map">
                                {
                                this.state.data &&
                                    <Map input={ this.state.data} catorgry={this.state.choosenCategory} maxColor={this.state.maxColor} minColor={this.state.minColor}/>
                                } 
                            </div>
                        </div> */}
                    </div>
                    </NoSsr>
                </Route>
                {/* <Route path="/news">
                    <NoSsr>
                        <News/>
                    </NoSsr>
                </Route> */}
            </div>    
        )
    }
}

export default Page;