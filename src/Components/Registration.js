import React,{useState} from 'react'
import {MenuItem,Select,InputLabel,FormControl, Grid, TextField, Button, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {useNavigate} from "react-router-dom"


const useStyles = makeStyles({

  sname: {
    textAlign: "left",
    color: ' white !important',
    backgroundColor: '#5861AE'

  }

});
function Registration() {
  const [user, setUser] = useState({
      name:"",
      phoneNumber:"",
      district:"",   
      email:"",
      state:"",
      Address:"",
      pinCode:""
    
})
const handleChange=e=>{
  const {name,value}=e.target
  setUser({
    ...user,
    [name]:value
  })
}
  
  const navigate = useNavigate();
 
  const classes = useStyles();
  return (
    
    <Grid container>
      <Grid item xs={4}>
        <div className="floatleft2" >
          <div className="leftpart-1 colortext">Laundry Service</div>
          <div className='lg-1'>Doorstep Wash & Dryclean Service</div><br />
          <br /><br />
          <div className='lg'>Already Have Account?</div><br></br>
          <Button variant="outlined" size="medium" className='btn2' onClick={()=>navigate("/login")}> Sign In</Button>
        </div>
      </Grid>
      <Grid item xs={8} className='rightSignIn'>
        <Grid >

          <div className='regFields'>
            <Grid item xs={6} className='col1'>
              <div className='sname3'>Register</div>
              <TextField id="standard-basic" label="Name" variant="standard" name="name" value={user.name} onChange={handleChange} /><br />
              <TextField label="Phone Number" name="phoneno" value={user.phoneno} onChange={handleChange}   variant="standard" />
              
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">District</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  name='district'
                  value={user.district}
                  onChange={handleChange}
                  label="State"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Nagpur</MenuItem>
                  <MenuItem value={20}>Hyderabad</MenuItem>
                  <MenuItem value={30}>Delhi</MenuItem>
                  <MenuItem value={40}>Bangalore</MenuItem>
                </Select>
              </FormControl>

              <TextField label="Pin Code" variant="standard" name="pincode" />

            </Grid>
            <Grid item xs={6} className='col2' >
              <TextField id="standard-basic" label="Mobile/Email" variant="standard" name="email" value={user.email} onChange={handleChange}  />
              <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"  name="password" value={user.password} onChange={handleChange} />

              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  name="state"
                  value={user.state}
                  onChange={handleChange}
                  label="State"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Maharashtra</MenuItem>
                  <MenuItem value={20}>Telangana</MenuItem>
                  <MenuItem value={30}>Andhra Pradesh</MenuItem>
                  <MenuItem value={40}>Bangalore</MenuItem>
                </Select>
              </FormControl>



              <TextField label="Address" variant="standard" name="address" value={user.address} onChange={handleChange} />
            </Grid>
          </div>

          <div className='chek'>
            <Checkbox />I agree to Terms & Condition receiving marketing and promotional materials.
          </div>

          <div className="RegBtn">

            <Button className={classes.sname}>Register</Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Registration  