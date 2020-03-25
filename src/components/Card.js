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
  @media (min-width: 1400px) {
    text-align: center;
    border-radius: 5px;
    background: #db7414;
    padding: 12px;
    height: 11rem;
    width: 100%;
    transition: 0.3s;  
  }
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
  @media (min-width: 1400px) {
    text-align: center;
    border-radius: 5px;
    background: #262524;
    padding: 12px;
    height: 11rem;
    width: 100%;
    transition: 0.3s;  
  }
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
  @media (min-width: 1400px) {
    text-align: center;
    border-radius: 5px;
    background: #609111;
    padding: 12px;
    height: 11rem;
    width: 100%;
    transition: 0.3s;  
  }
}
`

const Title = styled.div`
  font-size: 1rem;
  color: white;
  // text-align: center;
  @media (min-width: 1400px) {
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 0.5rem;
  }
`

const Number = styled.div`
  font-size: 2.2rem;
  color: white;
  font-weight: 800;
  padding-top: 0.3rem;
  // text-align: center;
  @media (min-width: 1400px) {
    font-size: 2.6rem;
  }
`

const Compare = styled.div`
  font-size: 1.1rem;
  color: white;
  margin-top: 1rem;
  // text-align: center;
  @media (min-width: 1400px) {
    font-size: 1rem;
    margin-top: 1.4rem !important;
  }
`

const Date = styled.div`
  font-size: 0.8rem;
  color: white;
  margin-top: 0.6rem;
  text-weight: 300;
}`

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export default class Card extends Component {
  render() {
    
    const compareTotalMobile = 
        (this.props.today.TotalCases - this.props.yesterday.TotalCases) >= 0
        ? <Compare>{"+ " + numberWithCommas(this.props.today.TotalCases - this.props.yesterday.TotalCases) + " in last 24 hours"} </Compare>
        : <Compare>{"- " + numberWithCommas(this.props.today.TotalCases - this.props.yesterday.TotalCases) + " in last 24 hours"} </Compare>

    const compareTotalDesktop = 
        (this.props.today.TotalCases - this.props.yesterday.TotalCases) >= 0
        ? <div>
            <Compare>{"+ " + numberWithCommas(this.props.today.TotalCases - this.props.yesterday.TotalCases)} </Compare>
            <Date> in last 24 hours</Date>
          </div>
        : <div>
            <Compare>{"- " + numberWithCommas(this.props.today.TotalCases - this.props.yesterday.TotalCases)} </Compare>
            <Date> in last 24 hours</Date>
          </div>
    
    const compareDeathMobile =
        (this.props.today.TotalDeaths - this.props.yesterday.TotalDeaths) >= 0
        ? <Compare>{"+ " + numberWithCommas(this.props.today.TotalDeaths - this.props.yesterday.TotalDeaths) + " in last 24 hours"} </Compare>
        : <Compare>{"- " + numberWithCommas(this.props.today.TotalDeaths - this.props.yesterday.TotalDeaths) + " in last 24 hours"} </Compare>

    const compareDeathDesktop = 
        (this.props.today.TotalDeaths - this.props.yesterday.TotalDeaths) >= 0
        ? <div>
            <Compare>{"+ " + numberWithCommas(this.props.today.TotalDeaths - this.props.yesterday.TotalDeaths)} </Compare>
            <Date> in last 24 hours</Date>
          </div>
        : <div>
            <Compare>{"- " + numberWithCommas(this.props.today.TotalDeaths - this.props.yesterday.TotalDeaths)} </Compare>
            <Date> in last 24 hours</Date>
          </div>

    const compareRecoverMobile =
    (this.props.today.TotalRecovered - this.props.yesterday.TotalRecovered) >= 0
    ? <Compare>{"+ " + numberWithCommas(this.props.today.TotalRecovered - this.props.yesterday.TotalRecovered) + " in last 24 hours"} </Compare>
    : <Compare>{"- " + numberWithCommas(this.props.today.TotalRecovered - this.props.yesterday.TotalRecovered) + " in last 24 hours"} </Compare>

    const compareRecoverDesktop = 
    (this.props.today.TotalRecovered - this.props.yesterday.TotalRecovered) >= 0
    ? <div>
        <Compare>{"+ " + numberWithCommas(this.props.today.TotalRecovered - this.props.yesterday.TotalRecovered)} </Compare>
        <Date> in last 24 hours</Date>
      </div>
    : <div>
        <Compare>{"- " + numberWithCommas(this.props.today.TotalRecovered - this.props.yesterday.TotalRecovered)} </Compare>
        <Date> in last 24 hours</Date>
      </div>


    

    const isMobile = window.innerWidth <= 1400;
    return (
      <div className="summary-card">
        <TotalCases>
          <Title>Total Cases</Title>
          <Number>{numberWithCommas(this.props.today.TotalCases)}</Number>
          {
            isMobile
            ? compareTotalMobile
            : compareTotalDesktop
          }
        </TotalCases>

        <TotalDeaths>
          <Title>Total Deaths</Title>
          <Number>{numberWithCommas(this.props.today.TotalDeaths)}</Number>
          {
            isMobile
            ? compareDeathMobile
            : compareDeathDesktop
          }
        </TotalDeaths>

        <TotalRecovered>
          <Title>Total Recovered</Title>
          <Number>{numberWithCommas(this.props.today.TotalRecovered)}</Number>
          {
            isMobile
            ? compareRecoverMobile
            : compareRecoverDesktop
          }
      </TotalRecovered>
    </div>
    
    )
  }
}
