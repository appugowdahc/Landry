import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import{ Grid,TextField,Button} from '@material-ui/core';
import "./comp.css"
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
   
  },
  abRoot: {
    backgroundColor: "white",
    color:"black"
  },
  tabs:{
    float:'right',
    color:" #4552C1",
    padding:'20px'
    
  },
  sname:{
    // textalign:' ',
    // font: 'normal normal medium 32px/60px Avenir',
    // letterspacing:' 1.28px',
    // color:' #4552C1',
    // text-transform: 'uppercase',
    // opacity: 1,
    textAlign:"left",
    color:' white',
    backgroundColor:'#5861AE'

},
  flextab:{
    display:'flex'
  },
  sname2:{
    color:"#4552C1",
    fontWeight:'700',
    fontSize:25,
    marginTop:'3rem'
  }
});
function Registration() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
          <Grid item xs={6}> 
              <div class="floatleft" >
                <div class="leftpart colortext">Laundry Service</div>
                <div className='mt'>Doorstep Wash & Dryclean Service</div><br/>
                <div className='mt'>Don't Have Ar Account?</div><br/>
                {/* <Button variant="outlined">Register</Button> */}
                <Button variant="outlined" size="medium" color='#4552C1'> Register</Button>
              </div>  
          </Grid>
          <Grid item xs={6} className='rightSignIn'>
              <Grid >
              <div className={classes.sname2}>Sign In</div>
              <TextField id="standard-basic" label="Mobile/Email" variant="standard" /><br/>
              <div id="error masg"></div>
              <br></br>
              <TextField id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"  />
          <div class="colortext">Forget Password?</div>
          <br></br>
          <Button className={classes.sname}>Sign In</Button>
              </Grid>
          </Grid>
        </Grid>
        
    </div>

  )
}

export default Registration