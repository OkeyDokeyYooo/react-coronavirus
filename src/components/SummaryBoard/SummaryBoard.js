import React from 'react'
import {ButtonBase} from '@material-ui/core'

import SummaryCard from './SummaryCard'
import './SummaryBoard.css'

function SummaryBoard(props){
    console.log(props)
     return (
        <div className="summary_container">
                <ButtonBase onClick={() => props.handleClick("TotalCases", "#660000", "#FFCCCC")}><SummaryCard title={"Total Cases"} data={props.input.TotalCases} diff={props.diff.TotalCases}/></ButtonBase>
                {/* <Grid item xs>
                    <ButtonBase onClick={() => props.handleClick("NewCases", "#666000", "#FFFFCC")}><SummaryCard title={"New Cases"} data={props.input.NewCases} diff={props.diff.NewCases}/></ButtonBase>
                </Grid> */}
                <ButtonBase onClick={() => props.handleClick("TotalDeaths", "#003366", "#CCE5FF")}><SummaryCard title={"Total Deaths"} data={props.input.TotalDeaths} diff={props.diff.TotalDeaths}/></ButtonBase>
                <ButtonBase onClick={() => props.handleClick("TotalRecovered", "#336600", "#E5FFCC")}><SummaryCard title={"Total Recovered"} data={props.input.TotalRecovered} diff={props.diff.TotalRecovered}/></ButtonBase>
        </div>
    )
}


export default SummaryBoard;