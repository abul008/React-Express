import React,{useState,useEffect} from "react";
import "./homeCounter.css";
import {useDispatch,useSelector} from "react-redux";
import {useForm} from 'react-hook-form';
import axios from 'axios';



function Homecounter(){
    const Total = useSelector(state=>state.count.gumar);
    const info = useSelector(state=>state.count.order);
    const {register,handleSubmit}=useForm();

    const sendMail=data=>{
        axios.post('http://localhost:9000/sendtomail',data)
    }

    return(
        <div className="counterWrapper">
           <div className="CounterCard">
             {
                 info.map((data)=>{
                     return(<div className="counterInfo">
                         <img src={data[1]}/>
                       <div className="counterInfoRight">  
                         <span>{data[0]}</span>
                         <span>{data[2]}</span>
                         </div>   
                      </div>   
                                        
                     )
                 })
             }

<div className="counterTotoal counterInfo"><span>{Total}AMD</span></div>    
          </div>
             
          <div className="sendShopInfo">
             <form onSubmit={handleSubmit(sendMail)} >
                 <h2>Delivery</h2>
                 <label>Email address</label>
                 <input {...register('username')} />
                 <label>Phone number</label>
                 <input {...register('contact')} />
                 <label>Delivery address</label>
                 <input {...register('adress')} />
                <button>Buy</button>
             </form>
         </div>
        </div> 
    )
} 


export default Homecounter ;