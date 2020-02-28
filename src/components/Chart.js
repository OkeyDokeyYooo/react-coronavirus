import React, {Component} from 'react';
import {Table, Col, Container} from 'reactstrap'
import Data from '../data.json';

const tableStyle = {
    // overflowY: "auto",
    // overflowX: "auto"
    overflow: "auto",
    height: "60rem"
}

class Chart extends Component {

    
    render() {
        return (
            <Col xs="6" style={tableStyle}>
                <Table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Total Cases</th>
                            <th>NewCases</th>
                            <th>TotalDeaths</th>
                            <th>NewDeaths</th>
                            <th>TotalRecovered</th>
                            <th>Critical</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((Detail) => {
                            return (
                                <tr>
                                    <td> {Detail["Country,Other"]}</td>
                                    <td> {Detail["Total Cases"]}</td>
                                    <td> {Detail.NewCases}</td>
                                    <td> {Detail.TotalDeaths}</td>
                                    <td> {Detail.NewDeaths}</td>
                                    <td> {Detail.TotalRecovered}</td>
                                    <td> {Detail["Serious,Critical"]}</td>
                                    <td> {Detail["Region"]}</td>
                                </tr>
                            )})}
                    </tbody>
                </Table>
            </Col>
        )
    }
}

export default Chart;