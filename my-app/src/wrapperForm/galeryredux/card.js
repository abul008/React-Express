import React, { useEffect, useState } from "react";
import {getImagesService} from "../redux/galery/service";


function Card(props) {
    const [rotet , setRotet] = useState("");
    const [ data , setData] = useState([]);

    useEffect(async()=>{
      await getImagesService("https://picsum.photos/id/117/1544/1024")
               .then(response => setData(response) )
              
    },[])

    

    
    return(
          <div className="card" >
            <div style={{transform:`rotateY(${rotet})`}}  className="cardName">
            <div className="cardImg" onClick={()=>{setRotet("180deg")}} onBlur={()=>{console.log("green")}} style={props.src1}>  
              <div className="cardTop">
                <div className="cardTopLeft" >
                  <img src={props.srcstory} style={{width:"46px",height:"46px"}}></img>
                  <div className="cardNameMen">
                  <p>{props.lastName} hello</p>
                  <span>&#8520;</span>
                  </div>
                </div>
                <div className="cardtopRight" style={{fontSize:"28px"}}>
                  {/* <img src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/close-512.png" style={{width:"28px",height:"28px"}} /> */}
                  &#9867;
                </div>
              </div>
              <div className="cardButtonImg">
               <img src={props.src}/>
              </div>
            </div>
            <div className="cardButton" onClick={()=>{setRotet("0deg")}} >
              <h2>{props.name}</h2>
              </div>
          </div>
        </div>
    )
}


export default Card;