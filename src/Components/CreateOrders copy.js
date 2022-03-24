import React from "react";
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
import "./styles/createOrder.css"

import shirt from "./images/shirts.jpg"
import t_shirt from "./images/t-shirts.jpg"
import trousers from "./images/trousers.jpg"
import jeans from "./images/jeans.jpg"
import boxer from "./images/boxers.jpg"

import iron from "./images/ironing_blur.jpg"
import towel from "./images/towel_blur.png"
import bleach from "./images/bleach_blur.png"
import wash from "./images/wash_blur.jpg"
import { Button } from "@mui/material";
import "./order.css";


import { faBars, faCirclePlus, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { useNavigate } from "react-router-dom"

function CreateOrders() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);
  const [count4, setCount4] = React.useState(0);
  const [count5, setCount5] = React.useState(0);



 
  function resetAll1(){
    setCount1(0)
  }
  function resetAll2(){
    setCount2(0)
  }   
  function resetAll3(){
    setCount3(0)
  }
  function resetAll4(){
    setCount4(0)
  }
  function resetAll5(){
    setCount5(0)
  }
  // const navigate = useNavigate();
  // function homeClick() {
  //   navigate("/register")
  // }
  // function createClick() {
  //   navigate('/orders')
  // }
  // function ordersClick() {
  //   navigate('/createOrders')
  // }

  return (
    <div>
      <div>
        <div className='ordersdiv'>
          <div className='sidetabs'>
            {/* <div className='divicon'>
              <FontAwesomeIcon className='icons' icon={faHome} onClick={homeClick()} />
            </div>
            <div className='divicon'>
              <FontAwesomeIcon className='icons' icon={faCirclePlus} onClick={createClick()} />
            </div>
            <div className='divicon'>
              <FontAwesomeIcon className='icons' icon={faBars} onClick={ordersClick} />
            </div> */}

          </div>
          <div className='maindiv'>
            <h2> Create Orders</h2><br></br>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead class="tableHead">
                  <TableRow>
                    <TableCell >Product Type</TableCell>
                    <TableCell >Quantity</TableCell>
                    <TableCell >Wash Type</TableCell>
                    <TableCell >Price</TableCell>
                    <TableCell ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell >
                      <div className="cell"><img src={shirt} alt="shirt" />
                        <div> <b>Shirt</b><br />
                          lorem10hd dsdsi jdz skjdk
                        </div>
                      </div>
                    </TableCell>
                    <TableCell >
                      <div className="counter" onClick={() => setCount1(s => s + 1)}>{count1}</div>
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv">
                        <img src={wash}  alt="iron" />
                        <img src={iron}  alt="iron" />
                        <img src={towel} alt="iron" />
                        <img src={bleach} alt="iron" /></div>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell >
                      <Button  onClick={()=> resetAll1()}>Reset</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >
                      <div className="cell"><img src={t_shirt} alt="shirt" />
                        <div> <b>T-Shirt</b><br />
                          lorem10hd dsdsi jdz skjdk
                        </div>
                      </div>
                    </TableCell>
                    <TableCell >
                      <div className="counter" onClick={() => setCount2(s => s + 1)}>{count2}</div>
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv"><img src={wash} alt="iron" />
                        <img src={iron} alt="iron" />
                        <img src={towel} alt="iron" />
                        <img src={bleach} alt="iron" /></div>
                    </TableCell>
                    <TableCell ></TableCell>
                    <TableCell >
                      <Button  onClick={()=> resetAll2()}>Reset</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >
                      <div className="cell"><img src={trousers} alt="shirt" />
                        <div><b>Trousers</b><br />
                          lorem10hd dsdsi jdz skjdk</div>
                      </div>

                    </TableCell>
                    <TableCell >
                      <div className="counter" onClick={() => setCount3(s => s + 1)}>{count3}</div>
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv"><img src={wash} alt="iron" />
                        <img src={iron} alt="iron" />
                        <img src={towel} alt="iron" />
                        <img src={bleach} alt="iron" /></div>
                    </TableCell>
                    <TableCell ></TableCell>
                    <TableCell >
                      <Button  onClick={()=> resetAll3()}>Reset</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >
                      <div className="cell"><img src={jeans} alt="shirt" />
                        <div><b>Jeans</b><br />
                          lorem10hd dsdsi jdz skjdk</div></div>

                    </TableCell>
                    <TableCell >
                      <div className="counter" onClick={() => setCount4(s => s + 1)}>{count4}</div>
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv"><img src={wash} alt="iron" />
                        <img src={iron} alt="iron" />
                        <img src={towel} alt="iron" />
                        <img src={bleach} alt="iron" /></div>
                    </TableCell>
                    <TableCell ></TableCell>
                    <TableCell >
                      <Button  onClick={()=> resetAll4()}>Reset</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >
                      <div className="cell"><img src={boxer} alt="shirt" />
                        <div><b>Boxer</b><br />
                          lorem10hd dsdsi jdz skjdk
                        </div>
                      </div>

                    </TableCell>
                    <TableCell >
                      <div className="counter" onClick={() => setCount5(s => s + 1)}>{count5}</div>
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv"><img src={wash} alt="iron" />
                        <img src={iron} alt="iron" />
                        <img src={towel} alt="iron" />
                        <img src={bleach} alt="iron" /></div>
                    </TableCell>
                    <TableCell ></TableCell>
                    <TableCell >
                      <Button  onClick={()=> resetAll5()}>Reset</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <div className="cancelPro">
              <Button>Cancel</Button>
              <Button  className="bt2">Proceed</Button>
            </div>
          </div>

          <div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default CreateOrders