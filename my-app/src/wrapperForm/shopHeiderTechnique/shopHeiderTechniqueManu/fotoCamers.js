import React,{useEffect,useState} from "react";
import ShopHeader from "../../shopHeider/shopheiderprops";
function Photocameras(){
    
    const [add,setAdd] = useState("");

    useEffect(()=>{
        fetch('http://localhost:9000/datashop')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setAdd(data.filter(word => word.name === "PHOTO CAMERAS"))
        });
    },[]) 

    return(
        <ShopHeader data={add}/> 
    )
}
export default Photocameras;
