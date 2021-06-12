import React, { useState, useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {imageRequest} from "../redux/galery/action";
import './redux.css';
import  Card from "./card";
import axios from "axios";



 function Gallery(){
    const img=useSelector(state=>state.img);
    const page=useSelector(state=>state.img.page);
    const loader=useSelector(state=>state.img.loader);
    const dispatch=useDispatch();
    const [ data , setData] = useState({hits: []});
    
    useEffect( async()=>{
        const resault = await axios(
          "https://picsum.photos/v2/list?page=2&limit=100",
        );
        setData(resault.data)
    },[]);

     useEffect(()=>{
         dispatch(imageRequest());
    },[dispatch])

    useEffect(()=>{
       window.onscroll=()=>{
            let scroller = Math.ceil(window.innerHeight+window.document.documentElement.scrollTop)
            if (scroller===document.body.scrollHeight) {
                    dispatch(imageRequest(page))     
              }
        }
        if(page===6){
            return window.onscroll=()=>{
                return false;
            }
        }
    },[page])

    return(
      <div className="GaleryWrapper">
   <span>
        <h2>image Gallery</h2>
        <p >just pull down to see more pictures</p>
  </span>
       
      <div className="gallery" >
          {/* <Card src={"../../public/logo192.png"} /> */}
      {
           img.data.map((imgData,i)=>{
               return(
            <Card key={i} name={imgData.author}  src1={{backgroundImage:`url(${imgData.download_url})`}}  />
             
            // <Card key={i} name={imgData.author}  src={imgData.download_url} srcstory={data.download_url} lastName={data.id}  />
               )
           })
       }        
       
      </div>
      <img style={{display:loader ? "none":"block"}} src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"/>
      </div>
     )
 }

 export default Gallery;