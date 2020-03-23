import React, {Component}from 'react';
import {Line} from "react-chartjs-2";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class LineChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                labels: this.props.datePeriod,
                datasets: [
                    {
                        label: "Total Cases",
                        data: this.props.totalCasesArray,
                        fill: false,
                        backgroundColor: '#F2994A',
                        borderColor: '#F2994A'
                    },
                    {
                        label: "Total Recovered",
                        data: this.props.totalRecoveredArray,
                        fill: false,
                        backgroundColor: '#27AE60',
                        borderColor: '#27AE60'
                    },
                    {
                        label: "Total Death",
                        data: this.props.totalDeathArray,
                        fill: false,
                        backgroundColor: '#333333',
                        borderColor: '#333333'
                    },
                ]
            },       
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.totalCasesArray != this.props.totalCasesArray){
            this.setState({
                data: {
                    labels: nextProps.datePeriod,
                    datasets: [
                        {
                            label: "Total Cases",
                            data: nextProps.totalCasesArray,
                            fill: false,
                            backgroundColor: '#F2994A',
                            borderColor: '#F2994A'
                        },
                        {
                            label: "Total Recovered",
                            data: nextProps.totalRecoveredArray,
                            fill: false,
                            backgroundColor: '#27AE60',
                            borderColor: '#27AE60'
                        },
                        {
                            label: "Total Death",
                            data: nextProps.totalDeathArray,
                            fill: false,
                            backgroundColor: '#333333',
                            borderColor: '#333333'
                        },
                    ]
                },           
            })
        }
    }

    
    render() {
        return (
            <div>
                {this.state.data &&
                        <Line 
                        data={this.state.data}
                        height={350}
                        ref = {this.chartReference}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            backgroundColor: 'rgba(20, 0, 0, 0.1)', // trying to set the background color to white
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
                                backgroundColor: 'rgba(112, 112, 112, 0.7)',
                                bodyFontFamily: 'Arial',
                                multiKeyBackground: 'rgba(112, 112, 112, 0.7)',
                                itemSort: (a, b, data) => b.yLabel - a.yLabel,
                                callbacks: {
                                    label: function(tooltipItem, data) {
                                        var label = data.datasets[tooltipItem.datasetIndex].label || '';
                    
                                        if (label) {
                                            label += ': ';
                                        }
                                        label += numberWithCommas(tooltipItem.yLabel)
                                        return label;
                                    }
                                },
                            },
                            hover: {
                                mode: 'nearest',
                                intersect: true
                            },
                            legend: {
                                labels: {
                                    boxWidth:20,
                                    usePointStyle: true,
                                },
                                position: 'bottom',
                            },
                        }}
                    />
                }
            </div>
        )

    }
}

export default LineChart;