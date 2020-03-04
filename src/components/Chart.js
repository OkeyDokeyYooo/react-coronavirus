import React, {Component} from 'react';
import {Table, Col, Container} from 'reactstrap'

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
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((Detail) => {
                            return (
                                <tr>
                                    <td> {Detail["name"]}</td>
                                    <td> {Detail["TotalCases"]}</td>
                                    <td> {Detail["NewCases"]}</td>
                                    <td> {Detail["TotalDeaths"]}</td>
                                    <td> {Detail["NewDeaths"]}</td>
                                    <td> {Detail["TotalRecovered"]}</td>
                                    <td> {Detail["Serious"]}</td>
                                </tr>
                            )})}
                    </tbody>
                </Table>
            </Col>
        )
    }
}

export default Chart;