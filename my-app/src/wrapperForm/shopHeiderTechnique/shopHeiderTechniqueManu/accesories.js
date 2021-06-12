import React,{useEffect,useState} from "react";
import ShopHeader from "../../shopHeider/shopheiderprops";
function Accesories(){
    
    const [add,setAdd] = useState("");

    useEffect(()=>{
        fetch('http://localhost:9000/datashop')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setAdd(data.filter(word => word.name === "ACCESORIES"))
        });
    },[]) 

    return(
        <ShopHeader data={add}/> 
    )
}
export default Accesories;