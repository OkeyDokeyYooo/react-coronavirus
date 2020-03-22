import React, {Component}from 'react';
import {Line} from "react-chartjs-2";

class LineChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : {
                labels: this.props.datePeriod,
                datasets: [
                    {
                        label: "Total Cases",
                        data: this.props.totalCasesArray,
                        fill: false,
                        backgroundColor: '#db7414',
                        borderColor: '#db7414'
                    },
                    {
                        label: "Death",
                        data: this.props.totalDeathArray,
                        fill: false,
                        backgroundColor: '#262524',
                        borderColor: '#262524'
                    },
                    {
                        label: "Total Recovered",
                        data: this.props.totalRecoveredArray,
                        fill: false,
                        backgroundColor: '#609111',
                        borderColor: '#609111'
                    }
                ]
            },
        }
    }



    render() {
        return (
            <Line data={this.state.data}
                  options={{
                    elements: { point: { hitRadius: 5, hoverRadius: 5 , radius: 2} }
                  }}
            />
        )
    }
}

export default LineChart;