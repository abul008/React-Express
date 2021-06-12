import React,{useEffect,useState} from "react";
import data from "../../../shop.json";
// import "./phoneShop.css";
import ShopHeader from "../../shopHeider/shopheiderprops";
function Tabletshop(){
     
    const [add,setAdd] = useState("");

    useEffect(()=>{
        fetch('http://localhost:9000/datashop')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setAdd(data.filter(word => word.name === "TABLET"))
        });
    },[]) 

    
    return(
        <ShopHeader data={add}/> 
    )
}
export default Tabletshop;