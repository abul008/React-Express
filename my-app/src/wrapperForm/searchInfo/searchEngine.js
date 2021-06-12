import React,{useState,useEffect} from  "react"
import axios from "axios";
import "./searchEngine.css";
import { get, set } from "react-hook-form";


export  const SearchEngine = ()=>{

   const [data,setData] = useState([])
   const [resailt , setResault] = useState(true)



   const [inputBlur , setInputBlur] = useState("18%")
     return(
        <div className="seachEngineWrapper" style={{width:inputBlur,transition:"2s"}}>
           <div className="searchEngineInput">
              <input onBlur={()=>{setInputBlur("18%");setResault(true)}} onKeyUp={(e)=>{
                 if(e.target.value.length !== 0){
                 axios.get("http://localhost:9000/datashoping")           
                 .then(res=>setData(res.data.filter(info => (info.firstname + " " + info.lastname).toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())  ||  info.lastname.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))))
               }else if(e.target.value.length === 0){
                  setData([])
               }
             }} onClick={()=>{setInputBlur("22%");setResault(false)}} type="text" />
           </div>
           <div className="searchResault" style={{display:resailt ? "flex" : "flex"}}>
              <ul>
                 {
                    data.map((data,i)=>{
                       return(
                       <li><a href={"/home/profil/"+ data._id}><div className="searchEngineMenImg"></div>{data.firstname} {data.lastname}</a></li>
                    )
                    })
                 }
              </ul>
           </div>
        </div>
     )
}