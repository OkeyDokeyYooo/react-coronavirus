import React, {Component} from 'react';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Page   from './components/Page';


class App extends Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    return (
      <div>
        <Header/>
        <Page/>
        <Footer/>
      </div>
    )
  }
}

export default App;
