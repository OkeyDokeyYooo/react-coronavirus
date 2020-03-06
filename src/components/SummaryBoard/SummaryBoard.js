import React, {useState} from 'react'
import {connect} from 'react-redux'

import SummaryCard from './SummaryCard'

function SummaryBoard(props){
    
    return (
        <div>
            <SummaryCard title={"TotalCases"} data={props.data.TotalCases}/>
            <SummaryCard title={"NewCases"} data={props.data.NewCases}/>
            <SummaryCard title={"TotalDeaths"} data={props.data.TotalDeaths}/>
            <SummaryCard title={"TotalRecovered"} data={props.data.TotalRecovered}/>
        </div>
    )
}

const mapState = state => ({
    data: state.Data.total
})

export default connect(mapState, null)(SummaryBoard);