import axios from "axios";
import React ,{ useState,useEffect} from "react";
import Weather from "./weather";
import Weatercity from "./weatherCity" ;
import "./weater.css";
import {useDispatch,useSelector} from "react-redux";
// import {weaterdiplay} from "../redux/shop/action";
import { weaterdiplay } from "../redux/shop/action";
import { BsX } from "react-icons/bs";
export const ChangeContext = React.createContext();


const img ="04n";
function Getjson(){
 const [data, setData] = useState([]);
 const [dataA , setDataA] = useState([]);
 const [data1, setData1] = useState([]);
 const [img, setImg] = useState();
 const [inputS , SetInputS] = useState("-36px");
 const [values , setValues] = useState("japan");
 const weaterDis = useSelector(state=>state.count.weater);
 const dispatch = useDispatch();
//  const [transform, setTransform] = useState(true);
 const appyCay = "4ce1e209c026e60b1136f1b6912ad2fc";


const wrapApp = `http://api.openweathermap.org/data/2.5/forecast?q=${values}&appid=${appyCay}`;
useEffect(()=>{
    axios.get(wrapApp)
    .then(resault=>{ setData1(resault.data.list);setData(resault.data.list[0]);setDataA(resault.data)});
    if(data.weather ? data.weather[0].main : null == "Clouds"){
        setImg("https://i.pinimg.com/originals/57/70/88/5770889831d33eddd05f1d2f9ec36ddd.gif");
        }else if(data.weather? data.weather[0].main : null == "Rain"){
            setImg("https://images.pexels.com/photos/3178798/pexels-photo-3178798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        }else if(data.weather? data.weather[0].main : null == "snow"){
            setImg("https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        }
   
},[ data.length !== 0]);
const search = ()=>{
    axios.get(wrapApp)
    .then(resault=>{ setData1(resault.data.list); setData(resault.data.list[0]);setDataA(resault.data);});
    if(data.weather ? data.weather[0].main : null == "Clouds"){
        setImg("https://i.pinimg.com/originals/57/70/88/5770889831d33eddd05f1d2f9ec36ddd.gif");
        }else if(data.weather? data.weather[0].main : null == "Rain"){
            setImg("https://images.pexels.com/photos/3178798/pexels-photo-3178798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        }else if(data.weather? data.weather[0].main : null == "snow"){
            setImg("https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        }
}


const valuseInp=(e)=>{
    setValues(e.target.value) 
} 
return(
    <div className="WeaterWrapper" style={{display:weaterDis ? "flex" : "none"}}>
        <div onClick={()=>dispatch(weaterdiplay(false))} className="weaterCloss"><BsX /></div>
      <div className="Whinder" style={{backgroundImage:`url(${img})`}}>
              <div style={{top:inputS ? "-36px" : "0px"}} className="WinderInput">
                     <div className="WinderIcon">
                   <input onChange={valuseInp} type="text"/>
                   <button onClick={search}>Search</button>
                     </div>
                     <span style={{transform:`rotate(${inputS ? '90deg' : '270deg' })`}} className="spanHover" onClick={()=>{SetInputS(!inputS);}}>&#10095;</span>
               </div>
               
           <div className="WhinderTop">
           
               <div className="whinederIcon">
                   <h2>{dataA.city ? dataA.city.name : null}</h2>
                       <span>{data.weather ? data.weather[0].main : null}</span>
                   </div> 
                   <div className="winderC">
                       <span>{data.main ? Math.floor(data.main.temp - 273) : null} &#8451;</span>
                       <div className="minMax">
                         <span>min. {data.main ? Math.floor(data.main.feels_like -273)  : null} <span>&#169;</span></span>
                         <span> max.  {data.main ? Math.floor(data.main.temp_min -273)  : null}<span>&#169;</span></span>
                       </div>
                   </div> 
               <div className="whinderCelsius">
               </div>
           </div>
           <div className="whinderButton">
           <ChangeContext.Provider value={data1}>
               <div className="whinderButtonTop">
                <Weather></Weather> 
               </div>
               <div className="buttonButton">
                    <Weatercity></Weatercity>
               </div>
               </ChangeContext.Provider>
           </div>
      </div>
    </div>  
)
}

export default Getjson;