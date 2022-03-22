import React from 'react'
import {useNavigate} from "react-router-dom";
import {Button} from '@material-ui/core';

function CreateOrders() {
  const navigate = useNavigate();
  return (
    <div>
        <Button variant="outlined" size="medium" color='#4552C1' onClick={()=>navigate("/createOrders")}> Sign In</Button>
    </div>
  )
}

export default CreateOrders