import React, {Component}from 'react';
import './App.css';

import Page from './components/Page'
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateAt: null
    }
  }

  getUpdate(updateTime){
    this.setState({
      updateAt: updateTime,
    })
  }

  render () {
    return (
      <div >
          <Header/>
          <Page className="page"/>
      </div>
    )
  }
}

export default App;
