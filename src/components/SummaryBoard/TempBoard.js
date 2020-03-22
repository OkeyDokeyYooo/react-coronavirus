import React from 'react';

import './TempBoard.css'


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const TempBoard = (props) => {
    return (
        <div className="board">
            <div className='container'>
                <div className="inner_container">
                    <span className="new pTag"> 
                        New: {
                            props.diff.TotalCases >= 0 ? 
                            <span className="total">+{numberWithCommas(props.diff.TotalCases)}</span>
                            :<span>-{numberWithCommas(props.diff.TotalCases)}</span>
                        }
                    </span>
                    <p className="number total pTag">{numberWithCommas(props.input.TotalCases)}</p>
                    <p className="text pTag">Confirmed</p>
                </div>
                <div className="inner_container">
                    <span className="new pTag">
                        New: {
                            props.diff.TotalDeaths >= 0 ? 
                            <span className="death">+{numberWithCommas(props.diff.TotalDeaths)}</span>
                            :<span>-{numberWithCommas(props.diff.TotalDeaths)}</span>
                        }
                    </span>
                    <p className="number death pTag">{numberWithCommas(props.input.TotalDeaths)}</p>
                    <p className="text pTag">Death</p>
                </div>
                <div className="inner_container">
                    <span className="new pTag">
                        New: {
                            props.diff.TotalRecovered >= 0 ? 
                            <span className="recover">+{numberWithCommas(props.diff.TotalRecovered)}</span>
                            :<span>-{numberWithCommas(props.diff.TotalRecovered)}</span>
                        }
                    </span>                
                    <p className="number recover pTag">{numberWithCommas(props.input.TotalRecovered)}</p>
                    <p className="text pTag">Recovered</p>
                </div>
            </div>
            <div>           
                <span className="update_time">Update At: {props.updatedAt} PDT</span>
            </div>
        </div>
    )
}

export default TempBoard;