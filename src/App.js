import React, {Component}from 'react';
import './App.css';
import './i18n';

import Page from './components/Page'
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateAt: null,
      lang: "en"
    }
    this.handleLangChange = this.handleLangChange.bind(this);
    this.getUpdate = this.getUpdate.bind(this)
  }

  handleLangChange(lang) {
    this.setState({lang: lang})
  } 

  getUpdate(updateTime){
    this.setState({
      updateAt: updateTime,
    })
  }

  render () {
    return (
      <div className="app-page">
          <Header updateAt={this.state.updateAt} handleLangChange={this.handleLangChange} lang={this.state.lang}/>
          <Page  getUpdate={this.getUpdate.bind(this)} lang={this.state.lang}/>
      </div>
    )
  }
}

export default App;
