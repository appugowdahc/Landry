import React,{useState} from "react";
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

import iron1 from "./images/ironing_blur.jpg"
import iron from "./images/iron.png"
import towel1 from "./images/towel_blur.png"
import towel from "./images/towel.jpg"
import bleach1 from "./images/bleach_blur.png"
import bleach from "./images/bleach.jpg"
import wash1 from "./images/wash_blur.jpg"
import wash from "./images/wash.png"
import { Button } from "@mui/material";
import "./order.css";


// import { faBars, faCirclePlus, faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { useNavigate } from "react-router-dom"

function CreateOrders() {
  const [item, setitem] = useState({name:"",quantity:0,actions:[],price:0});
  const [action, setaction] = useState([])
  // console.log(item)
  const bill={"Washing":20,
    "Pressing":15,"Folding":10,"Chemical-washing":25}
  const [product, setproduct] = useState([]);
  const [expression, setexpression] = useState(["calculate","calculate","calculate","calculate","calculate","calculate","calculate"])
  const [cost, setcost] = useState(0);
  const [reset, setreset] = useState(false)
  // const [icon, seticon] = useState(0)
  const [color,setcolor]=useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
  
  function change(e){
    setaction([])
    setcost(0)
    setitem({...item,name:e.target.id,quantity:e.target.value})
   
  }
  function  selectaction(e){
    const arr=e.target.id.split(' ')
    const changecolor=[...color]
    changecolor[parseInt(arr[1])-1]=!changecolor[parseInt(arr[1])-1]
    setcolor(changecolor)
    // console.log(e.target.id)
    const res=[...action]
  //  console.log(res)
    res.push(arr[0])
    // console.log(res)

    
    setaction(res)
    let washcost=cost
    washcost=washcost+bill[arr[0]]
    setcost(washcost)
      
    // console.log(cost)
    // console.log(action)
  }
  function calculate(e){
    item.actions=action;
    setitem(item)
    const totalprice=item.quantity*cost
    // console.log(totalprice)
    item.price=totalprice
    setitem(item)
    // console.log(item)
    const express=(item.quantity).toString()+"X"+(cost).toString()+" =  "+(item.quantity*cost).toString()
    expression[parseInt(e.target.id)]=express
    console.log(express)
    setexpression(expression)
    console.log(expression)
   
    const demoproduct=[...product]
    demoproduct.push(item)
    console.log("demo",demoproduct)
    setproduct(demoproduct)
    console.log(product)
    setreset(true)

    
    

    
    // console.log("item",item)
    console.log("product",product)
    // console.log("expression",expression)
  }

  function resetbutton(e){
    const changecolor=[...color]
    changecolor[parseInt(e.target.id)]=false
    changecolor[parseInt(e.target.id)+1]=false
    changecolor[parseInt(e.target.id)+2]=false
    changecolor[parseInt(e.target.id)+3]=false
    setcolor(changecolor)
    const demoproduct=[...product]
    demoproduct.pop(item)
    setproduct(demoproduct)
    item.quantity=0
    expression[e.target.id]="calculate";
    setexpression(expression)
    setitem(item)
    
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
                      <input className="counter" type="number" id="Shirts" name="Shirts"  onChange={(e)=>{change(e)}}/>
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv">
                        <div><img  id="Washing 1" src={color[0] ? wash1 : wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></div>
                        <div><img id="Pressing 2" src={color[1] ? iron1 : iron} alt="Press" onClick={(e)=>{selectaction(e)}} /></div>
                        <div><img id="Folding 3" src={color[2] ? towel1 : towel} alt="Fold" onClick={(e)=>{selectaction(e)}} /></div>
                        <div><img id="Chemical-washing 4" src={color[3] ? bleach1 : bleach} alt="Pack" onClick={(e)=>{selectaction(e)}}/></div>
                      </div>
                    </TableCell>
                    <TableCell><button type="submit" class="btn btn-default" id="0" onClick={(e)=>{calculate(e)}}>{expression[0]}</button></TableCell>
                    <TableCell >
                        {reset ? <button type="submit" class="btn btn-default" id="0" onClick={(e)=>{resetbutton(e)}}>reset</button> : null}
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
                    <input className="counter" type="number" id="T-Shirt"  onChange={(e)=>{change(e)}}/>
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv">
                        <div><img  id="Washing 5" src={color[4] ? wash1 : wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></div>
                        <div><img id="Pressing 6" src={color[5] ? iron1 : iron} alt="Press" onClick={(e)=>{selectaction(e)}} /></div>
                        <div><img id="Folding 7" src={color[6] ? towel1 : towel} alt="Fold" onClick={(e)=>{selectaction(e)}} /></div>
                        <div><img id="Chemical-washing 8" src={color[7] ? bleach1 : bleach} alt="Pack" onClick={(e)=>{selectaction(e)}}/></div>
                      </div>
                    </TableCell>
                    <TableCell><button type="submit" class="btn btn-default" id="1" onClick={(e)=>{calculate(e)}}>{expression[1]}</button></TableCell>
                    <TableCell >
                        {reset ? <button type="submit" class="btn btn-default" id="1" onClick={(e)=>{resetbutton(e)}}>reset</button> : null}
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
                    <input className="counter" type="number" id="Trousers"  onChange={(e)=>{change(e)}}/>
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv">
                        <div><img  id="Washing 9" src={color[7] ? wash1 : wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></div>
                        <div><img id="Pressing 10" src={color[8] ? iron1 : iron} alt="Press" onClick={(e)=>{selectaction(e)}} /></div>
                        <div><img id="Folding 11" src={color[9] ? towel1 : towel} alt="Fold" onClick={(e)=>{selectaction(e)}} /></div>
                        <div><img id="Chemical-washing 12" src={color[10] ? bleach1 : bleach} alt="Pack" onClick={(e)=>{selectaction(e)}}/></div>
                      </div>
                    </TableCell>
                    <TableCell><button type="submit" class="btn btn-default" id="2" onClick={(e)=>{calculate(e)}}>{expression[2]}</button></TableCell>
                    <TableCell >
                        {reset ? <button type="submit" class="btn btn-default" id="2" onClick={(e)=>{resetbutton(e)}}>reset</button> : null}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >
                      <div className="cell"><img src={jeans} alt="shirt" />
                        <div><b>Jeans</b><br />
                          lorem10hd dsdsi jdz skjdk</div></div>

                    </TableCell>
                    <TableCell >
                    <input className="counter" type="number" id="Jeans"  onChange={(e)=>{change(e)}}/>
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv">
                        <div><img  id="Washing 13" src={color[11] ? wash1 : wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></div>
                        <div><img id="Pressing 14" src={color[12] ? iron1 : iron} alt="Press" onClick={(e)=>{selectaction(e)}} /></div>
                        <div><img id="Folding 15" src={color[13] ? towel1 : towel} alt="Fold" onClick={(e)=>{selectaction(e)}} /></div>
                        <div><img id="Chemical-washing 16" src={color[14] ? bleach1 : bleach} alt="Pack" onClick={(e)=>{selectaction(e)}}/></div>
                      </div>
                    </TableCell>
                    <TableCell><button type="submit" class="btn btn-default" id="3" onClick={(e)=>{calculate(e)}}>{expression[3]}</button></TableCell>
                    <TableCell >
                        {reset ? <button type="submit" class="btn btn-default" id="3" onClick={(e)=>{resetbutton(e)}}>reset</button> : null}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >
                      <div className="cell"><img src={boxer} alt="shirt" />
                        <div><b>Boxers</b><br />
                          lorem10hd dsdsi jdz skjdk
                        </div>
                      </div>

                    </TableCell>
                    <TableCell >
                    <input className="counter" type="number" id="Boxers" name="Boxers" onChange={(e)=>{change(e)}}/>
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv">
                        <div><img  id="Washing 17" src={color[15] ? wash1 : wash} alt="Wash" onClick={(e)=>{selectaction(e)}}/></div>
                        <div><img id="Pressing 18" src={color[16] ? iron1 : iron} alt="Press" onClick={(e)=>{selectaction(e)}} /></div>
                        <div><img id="Folding 19" src={color[17] ? towel1 : towel} alt="Fold" onClick={(e)=>{selectaction(e)}} /></div>
                        <div><img id="Chemical-washing 20" src={color[18] ? bleach1 : bleach} alt="Pack" onClick={(e)=>{selectaction(e)}}/></div>
                      </div>
                    </TableCell>
                    <TableCell><button type="submit" class="btn btn-default" id="4" onClick={(e)=>{calculate(e)}}>{expression[4]}</button></TableCell>
                    <TableCell >
                        {reset ? <button type="submit" class="btn btn-default" id="4" onClick={(e)=>{resetbutton(e)}}>reset</button> : null}
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