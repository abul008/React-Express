import React, { useEffect,useState } from "react";
import data from "../../../shop.json";
// import "./phoneShop.css";
import ShopHeader from "../../shopHeider/shopheiderprops";
import axios from "axios";

function Tvshop(){
   
    
    const [add,setAdd] = useState("");

    useEffect(()=>{
        fetch('http://localhost:9000/datashop')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setAdd(data.filter(word => word.name === "TV"))
        });
    },[]) 
    return(
        <div>
        <ShopHeader  data={add} />
        </div>
    )
}
export default Tvshop;