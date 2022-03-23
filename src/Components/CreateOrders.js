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

import iron from "./images/iron.png"
import towel from "./images/towel.png"
import bleach from "./images/bleach.png"
import wash from "./images/wash.png"
import { Button } from "@mui/material";
import "./order.css";


import { faBars, faCirclePlus, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom"

function CreateOrders() {
  const navigate = useNavigate();
  function homeClick() {
    navigate("/register")
  }
  function createClick() {
    navigate('/orders')
  }
  function ordersClick() {
    navigate('/createOrders')
  }
  return (
    <div>
      <div>
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
                  <div className="counter">0</div>
                </TableCell>
                <TableCell >
                  <div className="imgdiv"><img src={wash} alt="iron" />
                    <img src={iron} alt="iron" />
                    <img src={towel} alt="iron" />
                    <img src={bleach} alt="iron" /></div>
                </TableCell>
                <TableCell></TableCell>
                <TableCell >
                  <Button>Reset</Button>
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
                  <div  className="counter" >0</div>
                </TableCell>
                <TableCell >
                  <div className="imgdiv"><img src={wash} alt="iron" />
                    <img src={iron} alt="iron" />
                    <img src={towel} alt="iron" />
                    <img src={bleach} alt="iron" /></div>
                </TableCell>
                <TableCell ></TableCell>
                <TableCell >
                  <Button>Reset</Button>
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
                  <div  className="counter">0</div>
                </TableCell>
                <TableCell >
                  <div className="imgdiv"><img src={wash} alt="iron" />
                    <img src={iron} alt="iron" />
                    <img src={towel} alt="iron" />
                    <img src={bleach} alt="iron" /></div>
                </TableCell>
                <TableCell ></TableCell>
                <TableCell >
                  <Button>Reset</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                  <div className="cell"><img src={jeans} alt="shirt" />
                    <div><b>Jeans</b><br />
                      lorem10hd dsdsi jdz skjdk</div></div>

                </TableCell>
                <TableCell >
                  <div  className="counter">0</div>
                </TableCell>
                <TableCell >
                  <div className="imgdiv"><img src={wash} alt="iron" />
                    <img src={iron} alt="iron" />
                    <img src={towel} alt="iron" />
                    <img src={bleach} alt="iron" /></div>
                </TableCell>
                <TableCell ></TableCell>
                <TableCell >
                  <Button>Reset</Button>
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
                  <div  className="counter">0</div>
                </TableCell>
                <TableCell >
                  <div className="imgdiv"><img src={wash} alt="iron" />
                    <img src={iron} alt="iron" />
                    <img src={towel} alt="iron" />
                    <img src={bleach} alt="iron" /></div>
                </TableCell>
                <TableCell ></TableCell>
                <TableCell >
                  <Button>Reset</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
          </div>

          <div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default CreateOrders