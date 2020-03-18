import React from 'react'
import {Container, Grid, ButtonBase} from '@material-ui/core'

import SummaryCard from './SummaryCard'

function SummaryBoard(props){
    console.log(props)
     return (
        <Container fluid style={{padding: '10px'}}>
            <Grid container spacing={0}>
                <Grid item >
                    <ButtonBase onClick={() => props.handleClick("TotalCases", "#660000", "#FFCCCC")}><SummaryCard title={"Total Cases"} data={props.input.TotalCases} diff={props.diff.TotalCases}/></ButtonBase>
                </Grid>
                {/* <Grid item xs>
                    <ButtonBase onClick={() => props.handleClick("NewCases", "#666000", "#FFFFCC")}><SummaryCard title={"New Cases"} data={props.input.NewCases} diff={props.diff.NewCases}/></ButtonBase>
                </Grid> */}
                <Grid item xs>
                    <ButtonBase onClick={() => props.handleClick("TotalDeaths", "#003366", "#CCE5FF")}><SummaryCard title={"Total Deaths"} data={props.input.TotalDeaths} diff={props.diff.TotalDeaths}/></ButtonBase>
                </Grid>
                <Grid item xs>
                    <ButtonBase onClick={() => props.handleClick("TotalRecovered", "#336600", "#E5FFCC")}><SummaryCard title={"Total Recovered"} data={props.input.TotalRecovered} diff={props.diff.TotalRecovered}/></ButtonBase>
                </Grid>  
            </Grid>
        </Container>
    )
}


export default SummaryBoard;