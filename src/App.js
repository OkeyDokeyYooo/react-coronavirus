import React, {Component} from 'react';
// import {Container ,NavbarBrand, Navbar, NavbarToggler,Collapse, NavItem,Nav } from 'reactstrap';
// import {Link} from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    )
  }
}

export default App;
