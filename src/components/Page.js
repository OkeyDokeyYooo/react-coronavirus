import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Row} from 'reactstrap';

import News   from './News';
import Map    from './Map';
import Chart from './Chart';


class Page extends Component {
    render() {
        return (
            <div>
                <Route exact path="/">
                    <Row fluid>
                        <Chart />
                        <Map />
                    </Row>
                </Route>
                <Route path="/news">
                    <News/>
                </Route>
            </div>
        )
    }
}

export default Page;