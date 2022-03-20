import React from 'react'

// import {Routes,Route} from "react-router-dom";
// import{ AppBar,Grid,Box ,Toolbar,Typography}from '@material-ui/core';
import "./Components/comp.css"
import Header from './Components/Header';
import Login from './Components/Login';
// import Registration from './Components/Registration';
import Footer from './Components/Footer';

function App() {
  // const classes = useStyles();
  return (
    <>
      <Header/>
      <Login/>
      <Footer/>
    </>
  )
}

export default App