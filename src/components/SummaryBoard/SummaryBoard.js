import React, {useState} from 'react'
import {Grid, ButtonBase} from '@material-ui/core'

import SummaryCard from './SummaryCard'

function SummaryBoard(props){
    return (
        <Grid container spacing={3}>
            <ButtonBase onClick={() => props.handleClick("TotalCases", "#ee3e32")}><SummaryCard title={"TotalCases"} data={props.input.TotalCases}/></ButtonBase>
            <ButtonBase onClick={() => props.handleClick("NewCases", "#fbb021")}><SummaryCard title={"NewCases"} data={props.input.NewCases} /></ButtonBase>
            <ButtonBase onClick={() => props.handleClick("TotalDeaths", "#1d4877")}><SummaryCard title={"TotalDeaths"} data={props.input.TotalDeaths} /></ButtonBase>
            <ButtonBase onClick={() => props.handleClick("TotalRecovered", "#1b8a5a")}><SummaryCard title={"TotalRecovered"} data={props.input.TotalRecovered} /></ButtonBase>
        </Grid>
    )
}


export default SummaryBoard;