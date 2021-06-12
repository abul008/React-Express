import axios from "axios";
// import React ,{ useState,useEffect} from "react";
import React ,{ useState,useEffect,useContext} from "react";
import {ChangeContext} from "./weatherFunction"
// import Weather from "./weather";


function Weatercity(){
    const values = useContext(ChangeContext);
    return(
        <div className="Cityweter">
           <div className="city">
              <ul>
                  <li>Wind Speed:{values[0] ? values[0].wind.speed : null}</li>
                  <li>Wind Degre:{values[0] ? values[0].wind.deg : null} </li>
                  <li>Mph Wind:{values[0] ? values[0].wind.gust : null} </li>
                  <li>Mph Wind:{values[0] ? values[0].main.pressure : null}</li>
              </ul>
           </div>
        </div>
    )
}

export default Weatercity;


