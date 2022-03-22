import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import{Grid,TextField,Button} from '@material-ui/core';
import {useNavigate} from "react-router-dom"

import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./comp.css"
const useStyles = makeStyles({
  
  sname:{
    textAlign:"left",
    color:'white !important' ,
    backgroundColor:'#5861AE'

},
  sname2:{
    color:"#4552C1",
    fontWeight:'700',
    fontSize:25,
    marginTop:'3rem'
  }
});

function Registration() {
  const navigate = useNavigate();
  const [ value,setValue]=useState('')
  const classes = useStyles();
  return (
    <div>
      <Grid container>
          <Grid item xs={6}> 
              <div className="floatleft" >
                <div className="leftpart colortext">Laundry Service</div>
                <div className='mt'>Doorstep Wash & Dryclean Service</div><br/>
                <div className='mt'>Don't Have An Account?</div><br/>
                {/* <Button variant="outlined">Register</Button> */}
                <Button variant="outlined" size="medium" className='btn2' onClick={()=>navigate("/register")}> Register</Button>
              </div>  
          </Grid>
          <Grid item xs={6} className='rightSignIn'>
              <Grid >
              <div className={classes.sname2}>Sign In</div>
              <TextField id="standard-basic" label="Mobile/Email" variant="standard"/><br/>
              <div id="error masg" vlaue={value}></div>
              <br></br>
              
              
               
              <div className='pass'>
              <div><TextField id="outlined-password-input" label="Password" type="password" value={value} 
              onChange={(e)=> setValue(e.target.value)} 
              error={!value} 
              helperText={!value? 'Required' :'Do not share your password with anyone'} autoComplete="current-password"  /></div>
              <div className='lockicon'><FontAwesomeIcon icon={faLock}/></div>
              </div>
              
              
          <div className="colortext">Forget Password?</div>
          <br></br>
          <Button className={classes.sname}   onClick={()=>navigate("/orders")} >Sign In</Button>
              </Grid>
          </Grid>
        </Grid>
        
    </div>

  )
}

export default Registration