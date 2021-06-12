import React,{useState,useEffect} from "react";
import axios from "axios";
import "./users.css";
import ProfileNav from "./proofileNav";
import Posts from "./posts"; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Users = ({match})=>{
    
    const [data ,setData]= useState()

    useEffect(async()=>{
        await  axios.get(`http://localhost:9000/datashoping/${match.params.undefined}`)
         .then(res=>setData(res.data));
        },[])

    

   return(
    <div className="profileWrapper">
       <div className="profileCantrol">
         <div className="profileTop">
            <div className="profileGallery">
                <div className="profileImg">
                       
                </div>
                <div className="profilFullname">{data ? data.firstname : null} {data ? data.lastname : null}</div>
            </div>
            <div className="profileNavAbout">
               <ProfileNav post={`/home/profil/${data ? data._id : null}/page`} about={`/home/profil/${data ? data._id : null}/about`} frends={`/home/profil/${data ? data._id : null}/frends` } photo={`/home/profil/${data ? data._id : null}/photo` }  /> 
               <div className="ProfileUbdate">
                       
                </div>   
            </div>
           </div>
           <div className="profileDown">
           <Router>
               <div className="profilHeaider">
                    <Route path={`/home/profil/${data ? data._id : null}/page`} exact component={Posts} />
                </div>  
            </Router>   
           </div>
        </div>    
    </div>
   )
}

export default Users;