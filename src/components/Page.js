import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Row, Container} from 'reactstrap';
import Axios from 'axios';
import moment from 'moment'

import News   from './News/News';
import Map    from './Map';
import Chart from './Chart';



class Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            trk: [],
        }
    }

    componentDidMount(){
        const today = moment(new Date()).format('YYYY-MM-DD')
        console.log(today);
        Axios.get("http://localhost:8080/entries/" + today)
            .then(res => {
                // console.log(res)
                if (res.data != null) {
                    this.setState({
                        trk: res.data.trk
                    })
                }
            })
    }

    render() {
        return (
            <div>
                <Route exact path="/">
                    <Container fluid>
                        <Row>
                            <Chart data={this.state.trk}/>
                            <Map data={this.state.trk}/>
                        </Row>
                    </Container>
                </Route>
                <Route path="/news">
                    <News/>
                </Route>
            </div>
        )
    }
}

export default Page;