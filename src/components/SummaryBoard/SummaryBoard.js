import React from 'react'
import {Container, Grid, ButtonBase} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import SummaryCard from './SummaryCard'

function SummaryBoard(props){

    return (
        <Container fluid style={{padding: '10px'}}>
            <Grid container spacing={0}>
                <Grid item xs>
                    <ButtonBase onClick={() => props.handleClick("TotalCases", "#660000", "#FFCCCC")}><SummaryCard title={"Total Cases"} data={props.input.TotalCases} yesterday={props.yesterdaySummary.TotalCases}/></ButtonBase>
                </Grid>
                <Grid item xs>
                    <ButtonBase onClick={() => props.handleClick("NewCases", "#666000", "#FFFFCC")}><SummaryCard title={"New Cases"} data={props.input.NewCases} yesterday={props.yesterdaySummary.NewCases}/></ButtonBase>
                </Grid>
                <Grid item xs>
                    <ButtonBase onClick={() => props.handleClick("TotalDeaths", "#003366", "#CCE5FF")}><SummaryCard title={"Total Deaths"} data={props.input.TotalDeaths} yesterday={props.yesterdaySummary.TotalDeaths}/></ButtonBase>
                </Grid>
                <Grid item xs>
                    <ButtonBase onClick={() => props.handleClick("TotalRecovered", "#336600", "#E5FFCC")}><SummaryCard title={"Total Recovered"} data={props.input.TotalRecovered} yesterday={props.yesterdaySummary.TotalRecovered}/></ButtonBase>
                </Grid>  
            </Grid>
        </Container>
    )
}


export default SummaryBoard;