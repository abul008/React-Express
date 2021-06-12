import React, { useState, useEffect } from 'react';
import { BiChevronLeft,BiChevronRight } from "react-icons/bi";
import "./caruselManu.css";


function Caruselmanu(props){
   

    const [translate,setTranslete] = useState(-150);


    return(
                 <div className="carusel">
                           <ul style={{transform:`translateX(${translate}%)`}}>
                           {
                               props.data.map((manu,i)=>{
                                   return(<li key={i}>
                                               <a href={manu.hreaf} className="caruselIcon">    
                                              <img src={manu.urlT}></img>
                                              <span>{manu.nameT}</span>
                                           </a>
                                         </li>
                                   )
                               })
                           }
                              {
                               props.data.map((manu,i)=>{
                                   return(<li key={i}>
                                               <a href={manu.hreaf} className="caruselIcon">    
                                              <img src={manu.urlT}></img>
                                              <span>{manu.nameT}</span>
                                           </a>
                                         </li>
                                   )
                               })
                           }
                              {
                               props.data.map((manu,i)=>{
                                   return(<li key={i}>
                                               <a href={manu.hreaf} className="caruselIcon">    
                                              <img src={manu.urlT}></img>
                                              <span>{manu.nameT}</span>
                                           </a>
                                         </li>
                                   )
                               })
                           }
                           </ul>
                           <div  onClick={()=>{setTranslete(translate - 12)}}className="caruselLeft iconCarusel"><BiChevronLeft/></div>
                           <div onClick={()=>{setTranslete(translate + 12)}}  className="caruselRight iconCarusel"><BiChevronRight/></div>
                 </div>
    )
}

export default Caruselmanu;