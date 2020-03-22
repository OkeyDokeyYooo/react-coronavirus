import React, {Component}from 'react';
import {Line} from "react-chartjs-2";
import { Cursor } from '@amcharts/amcharts4/charts';

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
                        label: "Total Death",
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
            <Line 
                data={this.state.data}
                height={300}
                options={{
                    responsive: true,
                    elements: { point: { hitRadius: 5, hoverRadius: 5 , radius: 2} },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                drawBorder: false,
                                borderDash: [8, 4],
                            },
                            ticks: {
                                callback: function(label, index, labels) {
                                    return label/1000+'k';
                                }
                            },
                            // scaleLabel: {
                            //     display: true,
                            //     labelString: '1k = 1000'
                            // }
                        }],
                        xAxes: [{
                            gridLines: false,
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 8,
                                padding: 10,
                                maxRotation: 0,
                                minRotation: 0
                            },
                        }]
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    legend: {
                        labels: {
                            boxWidth:20
                        }
                    }
                }}
            />
        )
    }
}

export default LineChart;