import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Row, Container} from 'reactstrap';
import Axios from 'axios';
import moment from 'moment'
import { connect } from 'react-redux'

import News   from './News/News';
import Map    from './Map';
import Chart from './Chart';
import SummaryBoard from './SummaryBoard/SummaryBoard'

class Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            summary: null
        }
    }

    componentDidMount(){
        const today = moment(new Date()).format('YYYY-MM-DD')
        Axios.get("http://localhost:8080/entries/" + today)
            .then(res => {
                if (res.data != null) {
                    this.props.updateData(res.data.trk)
                    let summary = res.data.trk.pop()
                    this.setState({
                        data: res.data.trk,
                        summary: summary
                    })
                }
            })
    }

    render() {
        return (
            <div>
                <Route exact path="/">
                    <Container fluid>
                        <Row xs={12}>
                            <SummaryBoard />
                        </Row>
                        <Row>
                            <Chart />
                            {
                                this.state.data &&
                                <Map input={ this.state.data}/>
                            }
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