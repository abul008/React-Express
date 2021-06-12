import react, { useEffect, useState } from "react";
import Postpageone from "./postPageOne";
import Pagination from "./pagination";
import axios from "axios";


const Posts = ()=>{

    const [Posts,setPosts] = useState([]);
    const [loading , setLoading] = useState(false);
    const [currentPage , setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
   
    useEffect(async()=>{
         setLoading(true);
         const res = await axios.get('http://localhost:9000/datashop')
         setPosts(res.data);
         setLoading(false);      
     },[]);
    
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = Posts.slice(indexOfFirstPost,indexOfLastPost);

   const paginate = pageNumber => setCurrentPage(pageNumber)
    return(
        <div className="PostsWrapper">
           <div className="postFrend">
              <h1>My Blog</h1>
              <Postpageone loading={loading} posts={currentPosts}/>
              <Pagination postsPerPage={postsPerPage} totalPosts={Posts.length} paginate={paginate} />   
           </div>
        </div>
    )
}
export default Posts;