import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Row, Container} from 'reactstrap';
import Axios from 'axios';

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
        Axios.get("http://localhost:5000/entries/")
            .then(res => {
                if (res.data.length > 0) {
                    console.log(res.data[0].trk)
                    this.setState({
                        trk: res.data[0].trk
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