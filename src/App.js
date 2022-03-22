import React from 'react'

// import {Routes,Route} from "react-router-dom";
// import{ AppBar,Grid,Box ,Toolbar,Typography}from '@material-ui/core';
import "./Components/comp.css"
import Order from './Components/Order';
import Header from './Components/Header';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Footer from './Components/Footer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CreateOrders from './Components/CreateOrders';


function App() {
  // const classes = useStyles();
  return ( 
    <>
      {/* <Header/>
      {/* <Login/> */}
      {/* <Registration/> */}
      {/* <CreateOrder/> */}
      {/* <Footer/> */}
      <>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login/>}/>
        <Route exact path="/login" element={ <Login/>}/>
        <Route exact path="/orders" element={<Order/>}/>
        <Route exact path="/register" element={<Registration/>}/>
        <Route exact path="/create" element={<CreateOrders/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      </>
      
    </>
  )
}

export default App