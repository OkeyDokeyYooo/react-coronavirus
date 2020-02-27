import React, {Component} from 'react';
import {NavbarBrand, Navbar, NavbarToggler,Collapse, NavItem,Nav } from 'reactstrap';
import {Link} from 'react-router-dom';
import './App.css';

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
          <Navbar className="border-bottom" expand="md" light>
            <NavbarBrand > COVID-19 </NavbarBrand>
            <NavbarToggler onClick={() => this.setState({isOpen: !this.state.isOpen}) } className="border-0"  navbar/>
            <Collapse isOpen={this.state.isOpen} color="black" navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/"> Data </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/News"> News </Link>
              </NavItem>
            </Nav>
            </Collapse>
          </Navbar>
      </div>
    )
  }
}

export default App;
