import React ,{ useState,useEffect,useContext} from "react";
import {ChangeContext} from "./weatherFunction"


function Weather(){
    const values = useContext(ChangeContext); 
    const [left, setLeft] = useState(0);
    const [click ,setClick] = useState(true);
    const [clickSpan, setClickSpan] = useState(true);

    return(
        <div className="weather">
            <span onClick={()=>{
                if(left === 0){
                    setLeft(left +0)
                    setClick(true)
                }else if(left < 0){
                setLeft(left + 380)
                setClickSpan(true)
                }
                }} style={{display:click ? "none" : "block"}} className="weathercardSpan la">&#10148;</span>
             {
                 values.map((data,i)=>{
                     return( <div key={i} className="weatherCard "   style={{left:left}}>
                        <span >{data.dt_txt.slice(11, 16)}</span>
                        <img src={`https://openweathermap.org/img/w/${data.weather ? data.weather[0].icon : null}.png`} />
                        <span>{data.main ? Math.floor(data.main.temp - 273) : null}</span>
                     </div>

                     )
                 })
             }
             <span onClick={()=>{
                 if(left === -3420){
                    setLeft(left +0)
                    setClickSpan(false)
                }else if(left <= 0){
                setLeft(left -380)
                setClick(false)
                
                
                }
                 }}  style={{display:clickSpan ? "block" : "none"}} className="weathercardSpan li" >&#10148;</span>
                
        </div>
    )
}

export default Weather;