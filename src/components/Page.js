import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {Row, Container} from 'reactstrap';

import News   from './News/News';
import Map    from './Map';
import Chart from './Chart';


class Page extends Component {
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

export default Page;