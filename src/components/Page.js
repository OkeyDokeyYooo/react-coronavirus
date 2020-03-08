import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Row, Container} from 'reactstrap';
import Axios from 'axios';
import moment from 'moment-timezone';
import Footer from './/Layouts/Footer'

import News   from './News/News';
import Map    from './Map';
import Chart from './Chart';
import SummaryBoard from './SummaryBoard/SummaryBoard'
import { Grid } from '@material-ui/core';

class Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            summary: null,
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

    componentDidMount(){
        const today = moment.utc().format('YYYY-MM-DD')
        Axios.get("http://localhost:8080/entries/" + today)
            .then(res => {
                if (res.data != null) {
                    console.log(res.data)
                    const localData = res.data.trk;
                    let summary = localData.pop()
                    this.setState({
                        data: localData,
                        summary: summary,
                    })
                }
            })
    }

    render() {
        return (
            <div>
                <Route exact path="/">
                    <Container fluid>
                        <Row xs={12} style={{ padding: "10px" }}>
                            {
                                this.state.summary &&
                                <SummaryBoard input={this.state.summary} handleClick={this.handleClick}/>
                            }
                        </Row>
                        <Row >
                            <Grid xs={6}>
                                {
                                    this.state.data &&
                                    <Chart data={this.state.data} />
                                }
                            </Grid>
                            <Grid xs={6}>
                                {
                                this.state.data &&
                                    <Map input={ this.state.data} catorgry={this.state.choosenCategory} maxColor={this.state.maxColor} minColor={this.state.minColor}/>
                                } 
                            </Grid>
                        </Row>
                        <Footer />
                    </Container>
                </Route>
                <Route path="/news">
                    <News/>
                    {/* <Footer /> */}
                </Route>
            </div>    
        )
    }
}

export default Page;