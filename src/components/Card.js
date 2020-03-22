import React, { Component } from 'react';
import styled from 'styled-components';

const TotalCases = styled.div`
  border-radius: 5px;
  background: #db7414;
  // border: 2px solid #73AD21;
  padding: 20px;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  height: 9rem;
  width: 22rem;
  // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
`

const TotalDeaths = styled.div`
  border-radius: 5px;
  background: #262524;
  // border: 2px solid #73AD21;
  padding: 20px;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  height: 9rem;
  width: 22rem;
  // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
`

const TotalRecovered = styled.div`
  border-radius: 5px;
  background: #609111;
  // border: 2px solid #73AD21;
  padding: 20px;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  height: 9rem;
  width: 22rem;
  // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}
`

const Title = styled.div`
  font-size: 20px;
  color: white;
  // text-align: center;
`

const Number = styled.div`
  font-size: 30px;
  color: white;
  font-weight: 800;
  // text-align: center;
`

const Compare = styled.div`
  font-size: 18px;
  color: white;
  // text-align: center;
`

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }
  render() {
    console.log(this.props.yesterday);
    return (
      <div>
        <TotalCases>
          <Title>Total Cases</Title>
          <Number>{this.props.today.TotalCases}</Number>
          <Compare>{this.props.yesterday.diff.TotalCases + " in last 24 hours"} </Compare>
        </TotalCases>

        <TotalDeaths>
          <Title>Total Deaths</Title>
          <Number>{this.props.today.TotalDeaths}</Number>
          <Compare>{this.props.yesterday.diff.TotalDeaths + " in last 24 hours"} </Compare>
        </TotalDeaths>

        <TotalRecovered>
          <Title>Total Recovered</Title>
          <Number>{this.props.today.TotalRecovered}</Number>
          <Compare>{this.props.yesterday.diff.TotalRecovered + " in last 24 hours"} </Compare>
      </TotalRecovered>
    </div>
    
    )
  }
}
