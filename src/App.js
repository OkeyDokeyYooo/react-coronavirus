import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Data   from './components/Data';
import News   from './components/News';


class App extends Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    return (
      <div className="App">
        <Header/>
          <Route exact path="/">
            <Data/>
          </Route>
          <Route path="/news">
            <News/>
          </Route>
        <Footer/>
      </div>
    )
  }
}

export default App;
