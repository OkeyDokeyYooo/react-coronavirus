import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import './TempBoard.css'


const TempBoard = (props) => {

    return (
        <div className='container'>
            <div>
                <p>Total Cases</p>
                <p>300, 000</p>
                <ArrowUpwardIcon/>
                <p>200</p>
                <p>daily changes</p>
            </div>
            <div>
                <p>Total Cases</p>
                <p>300, 000</p>
                <ArrowUpwardIcon/>
                <p>200</p>
                <p>daily changes</p>
            </div>
            <div>
                <p>Total Cases</p>
                <p>300, 000</p>
                <ArrowUpwardIcon/>
                <p>200</p>
                <p>daily changes</p>
            </div>
        </div>
    )
}

export default TempBoard;