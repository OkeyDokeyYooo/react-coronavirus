import React, {Component}from 'react';
import {Line} from "react-chartjs-2";
import { withTranslation } from 'react-i18next';

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
                        label: this.props.totalCasesLabel,
                        data: this.props.totalCasesArray,
                        fill: false,
                        backgroundColor: '#F2994A',
                        borderColor: '#F2994A'
                    },
                    {
                        label: this.props.totalRecoveredLabel,
                        data: this.props.totalRecoveredArray,
                        fill: false,
                        backgroundColor: '#27AE60',
                        borderColor: '#27AE60'
                    },
                    {
                        label: this.props.totalDeathsLabel,
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
        if (nextProps.totalCasesArray !== this.props.totalCasesArray || nextProps.totalCasesLabel !== this.props.totalCasesLabel){
            this.setState({
                data: {
                    labels: nextProps.datePeriod,
                    datasets: [
                        {
                            label: nextProps.totalCasesLabel,
                            data: nextProps.totalCasesArray,
                            fill: false,
                            backgroundColor: '#F2994A',
                            borderColor: '#F2994A'
                        },
                        {
                            label: nextProps.totalRecoveredLabel,
                            data: nextProps.totalRecoveredArray,
                            fill: false,
                            backgroundColor: '#27AE60',
                            borderColor: '#27AE60'
                        },
                        {
                            label: nextProps.totalDeathsLabel,
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
            <div className="line-chart-container">
                {this.state.data &&
                        <Line 
                        data={this.state.data}
                        height={350}
                        width={"100%"}
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
                            plugins:{
                                annotation: {
                                    
                                }
                            }
                        }}
                    />
                }
            </div>
        )

    }
}

export default withTranslation()(LineChart);