import React from 'react'
import {Grid, ButtonBase} from '@material-ui/core'

import SummaryCard from './SummaryCard'

function SummaryBoard(props){
    return (
        <Grid container spacing={3}>
            <ButtonBase onClick={() => props.handleClick("TotalCases", "#660000", "#FFCCCC")}><SummaryCard title={"TotalCases"} data={props.input.TotalCases}/></ButtonBase>
            <ButtonBase onClick={() => props.handleClick("NewCases", "#666000", "#FFFFCC")}><SummaryCard title={"NewCases"} data={props.input.NewCases} /></ButtonBase>
            <ButtonBase onClick={() => props.handleClick("TotalDeaths", "#003366", "#CCE5FF")}><SummaryCard title={"TotalDeaths"} data={props.input.TotalDeaths} /></ButtonBase>
            <ButtonBase onClick={() => props.handleClick("TotalRecovered", "#336600", "#E5FFCC")}><SummaryCard title={"TotalRecovered"} data={props.input.TotalRecovered} /></ButtonBase>
        </Grid>
    )
}


export default SummaryBoard;