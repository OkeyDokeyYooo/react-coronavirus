import React, {Component} from 'react';
import './App.css';

// import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
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
        {/* <Footer/> */}
      </div>
    )
  }
}

export default App;
