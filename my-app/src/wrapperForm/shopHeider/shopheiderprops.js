import React, { useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";
import {addCounter,orderAdd,removeCounter,addGumar,minus,productLink} from '../redux/shop/action';
import datas from "../../shop.json";
import { BiCart} from "react-icons/bi";
import axios from "axios"
import {BsPencil} from "react-icons/bs";
import "./shopheiderprops.css";
import {Link, Redirect} from 'react-router-dom';

function PhonesHeader(props,{loading}){

    const [bootomInp,setBootominp] = useState("-376px")
    const history = useHistory()

    const dispatch = useDispatch();
    const [datass,setDatass] = useState([])


   if(loading){
    return <h2>Loading...</h2>
   
}

    return(
        <div className="shopWrapper">
            <div className="shopWrapperSetting">
            <Link onClick={()=>{
                    for (var i = 1; i < props.datasort.length; i++)
                    for (var j = 0; j < i; j++)
                        if ( props.datasort[i].buy  > props.datasort[j].buy) {
                          var x = props.datasort[i];
                          props.datasort[i] = props.datasort[j];
                          props.datasort[j] = x;
                        }   
                       
             }}>Sort</Link>
              <Link onClick={()=>{
                    for (var i = 1; i < props.datasort.length; i++)
                    for (var j = 0; j < i; j++)
                        if ( props.datasort[i].buy  < props.datasort[j].buy) {
                          var x = props.datasort[i];
                          props.datasort[i] = props.datasort[j];
                          props.datasort[j] = x;
                        }   
                       
             }}>Sort</Link>
            </div>
            <div className="shopCard" >
           {   props.data.length == 0 ?
            null :  props.data.map((data,i)=>{
                   return(<div key={i}  className="phoneShopCard">
                    <a onClick={()=>{localStorage.setItem("idproduct" , data._id)}} target="_blank" href={"/home/techniquenav/product/"+ data._id}>  
                   <div className="shopCardBackground" style={{backgroundImage:`url("${data.src}")`}}>          
                   </div>
                   </a>                 
                   <h3>{data.shopnames}</h3>
                   <div className="shopHeaderPropCantrol">
                   <b>{data.buy }00 AMD</b>
                   <b>{data.cesh}</b>
                   </div>
                   <p >{data.color}</p> 
                   <div className="shopCardButtonCatnreol">
                   <BsPencil id={`a${i}`} onClick={()=>{setBootominp("-26px")}}/>   
                   <button onClick={()=>{
                       dispatch(orderAdd ([data.name,data.src,data.buy]))
                       dispatch(addCounter())
                       dispatch(addGumar(data.buy))
                       
                      }}> <BiCart/></button>
                   
                      </div>
                     
                      {/* <button id={data.id} onClick={(e)=>{dispatch(minus(data.buy),dispatch(removeCounter(),console.log(e.target.id)))}}>minus</button> */}
                      </div>
                   )
               })
           }
             
               </div>
            </div>
    )
}
export default PhonesHeader;