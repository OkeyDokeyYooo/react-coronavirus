import React from 'react';
import {ThemeProvider, createMuiTheme} from '@material-ui/core'

import './App.css';

import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import Page   from './components/Page';


const darkTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffffff',
    }
  },
});

export default function App() {

  return (
    <div >
      <ThemeProvider className="main-container" theme={darkTheme}>
        <Header/>
        <Page className="page"/>
      </ThemeProvider>
    </div>
  )
}
