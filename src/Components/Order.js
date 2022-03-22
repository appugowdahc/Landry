import React from 'react';
import "./order.css";
import { faBars, faCirclePlus, faHome } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom"
import { Grid, Button } from '@material-ui/core';

function CreateOrder() {
  const navigate = useNavigate();
  function homeClick() {
    navigate("/register")
  }
  function createClick() {
    // navigate('/create')   
  }
  function ordersClick() {
    navigate('/orders')
  }

  return (
    <>
      <div className='ordersdiv'>
        <div className='sidetabs'>
          <div className='divicon'>
            <FontAwesomeIcon className='icons' icon={faHome} onClick={homeClick()} />
          </div>
          <div className='divicon'>
            <FontAwesomeIcon className='icons' icon={faCirclePlus} onClick={createClick()} />
          </div>
          <div className='divicon'>
            <FontAwesomeIcon className='icons' icon={faBars} onClick={ordersClick} />
          </div>

        </div>
        <div className='maindiv'>
          <h3>No Orders available</h3>
          <Button variant="outlined" size="medium" className='btn2' onClick={() => navigate("/createOrders")}> Create</Button>
        </div>

        <div>


        </div>
      </div>


    </>
  )
}

export default CreateOrder