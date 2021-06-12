import React, { useEffect,useState } from "react";
// import data from "../../../shop.json";
// import "./phoneShop.css";
import ShopHeader from "../../shopHeider/shopheiderprops";
import axios from "axios";

function Tvshop(){
   
    
    const [add,setAdd] = useState([]);
    const [add1 , setAdd1] = useState("")
    const [Posts,setPosts] = useState([]);
    const [loading , setLoading] = useState(false);
    const [currentPage , setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(20);

    useEffect(()=>{
      setLoading(true)
        fetch('http://localhost:9000/datashop')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setAdd(data.filter(word => word.name === "PHONE"))
        });
        setLoading(false)
    },[]) 
    return(
        <div>  
        <ShopHeader loading={loading}  data={add} datasort={add}/>
        </div>
    )
}
export default Tvshop;