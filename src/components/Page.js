import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Row, Container} from 'reactstrap';
import Axios from 'axios';
import moment from 'moment'
import { connect } from 'react-redux'

import News   from './News/News';
import Map    from './Map';
import Chart from './Chart';

class Page extends Component {
    componentDidMount(){
        const today = moment(new Date()).format('YYYY-MM-DD')
        Axios.get("http://localhost:8080/entries/" + today)
            .then(res => {
                if (res.data != null) {
                    this.props.updateData(res.data.trk)
                }
            })
    }


    render() {
        return (
            <div>
                <Route exact path="/">
                    <Container fluid>
                        <Row>
                            <Chart />
                            <Map />
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

const mapState = state => ({
    data: state.Data.trk
})

const mapDispatch = dispatch => ({
    updateData: (data) => dispatch.Data.updateData(data)
})

export default connect(mapState, mapDispatch)(Page);