import React, { Component } from 'react';
import styled from 'styled-components';

const TotalCases = styled.div`
  border-radius: 5px;
  background: #db7414;
  // border: 2px solid #73AD21;
  padding: 12px;
  height: 8rem;
  width: 100%;
  // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
`

const TotalDeaths = styled.div`
  border-radius: 5px;
  background: #262524;
  // border: 2px solid #73AD21;
  padding: 12px;
  height: 8rem;
  width: 100%;
  margin-top: 1rem;
  // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
`

const TotalRecovered = styled.div`
  border-radius: 5px;
  background: #609111;
  // border: 2px solid #73AD21;
  padding: 12px;
  height: 8rem;
  width: 100%;
  margin-top: 1rem;
  // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
`

const Title = styled.div`
  font-size: 1.2rem;
  color: white;
  // text-align: center;
`

const Number = styled.div`
  font-size: 2.2rem;
  color: white;
  font-weight: 800;
  padding-top: 0.3rem;
  // text-align: center;
`

const Compare = styled.div`
  font-size: 1.1rem;
  color: white;
  padding-top: 0.8rem;
  // text-align: center;
`
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }
  render() {
    console.log(this.props.yesterday);
    return (
      <div className="summary-card">
        <TotalCases>
          <Title>Total Cases</Title>
          <Number>{numberWithCommas(this.props.today.TotalCases)}</Number>
          <Compare>{numberWithCommas(this.props.yesterday.diff.TotalCases) + " in last 24 hours"} </Compare>
        </TotalCases>

        <TotalDeaths>
          <Title>Total Deaths</Title>
          <Number>{numberWithCommas(this.props.today.TotalDeaths)}</Number>
          <Compare>{numberWithCommas(this.props.yesterday.diff.TotalDeaths) + " in last 24 hours"} </Compare>
        </TotalDeaths>

        <TotalRecovered>
          <Title>Total Recovered</Title>
          <Number>{numberWithCommas(this.props.today.TotalRecovered)}</Number>
          <Compare>{numberWithCommas(this.props.yesterday.diff.TotalRecovered) + " in last 24 hours"} </Compare>
      </TotalRecovered>
    </div>
    
    )
  }
}
