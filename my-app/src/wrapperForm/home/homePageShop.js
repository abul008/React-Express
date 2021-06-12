import react,{useEffect,useState} from "react";
import "./homePageShop.css";
import HomeshopTop from "./homeShopTop";
import DataCardFunction from "../cardHome/dataTable1";
import ShopHeader from "../shopHeider/shopheiderprops";
import Pagination from "../userspeople/pagination";
import axios from "axios";
import {Link, Redirect} from 'react-router-dom';

function Homepageshop(){

    const [Posts,setPosts] = useState([]);
    const [loading , setLoading] = useState(false);
    const [currentPage , setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(20);
   
    useEffect(async()=>{
         setLoading(true);
         const res = await axios.get('http://localhost:9000/datashop')
        //  setPosts(res.data.reverse());
         let i2 = res.data.length - 1; 
         for(var i = 0;i<res.data.length/2; i++ ){
            let d = res.data[i];
            res.data[i] = res.data[i2];
            res.data[i2] = d;
            i2 = i2 - 1 ;  
        }
         setPosts(res.data)
         setLoading(false);      
     },[]);
    
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = Posts.slice(indexOfFirstPost,indexOfLastPost);
   const paginate = pageNumber => setCurrentPage(pageNumber)  
    return(

        <div className="homePageWrapper">
             <HomeshopTop />
             <DataCardFunction />
             <ShopHeader data={currentPosts} loading={loading} datasort={Posts} />  
             <Pagination postsPerPage={postsPerPage} totalPosts={Posts.length} paginate={paginate} />   
            </div>
    )

}

export default Homepageshop;