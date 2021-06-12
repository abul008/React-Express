import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./homeShopNav.css";
import {clickBottom,weaterdiplay} from '../redux/shop/action';
import {userinfochat} from "../redux/login/action";
import {BsFillBagFill} from  "react-icons/bs"
import { BsFillBrightnessAltHighFill,BsHouseDoorFill } from "react-icons/bs";
import { BiMenu} from "react-icons/bi";
import {useDispatch,useSelector} from "react-redux";
import { FiShare, FiSettings ,FiChevronUp } from "react-icons/fi";
import {SearchEngine} from "../searchInfo/searchEngine";




function LoudNav(){

    const count =  useSelector(state=>state.count.counter);
    const username = useSelector(state=>state.login.chatfullname);
    const dispatch = useDispatch();
    const [yourprofile, setYourprofile] = useState(true)
    
    useEffect(async()=>{
        await axios.get("http://localhost:9000/datashoping")
         .then(res=>dispatch(userinfochat(res.data.filter(info => info._id ===  JSON.parse(localStorage.getItem("myId"))))))
   },[])

   
    return(
        <div className="singInNav NavHome">
            <div className="NavCenter">
                        <SearchEngine />
                    <div className="navIcon"> 
                    <li  className="navI1" style={{fontSize:"30px"}}  onClick={()=>{dispatch(clickBottom("0px"))}}><BiMenu/></li>
                       <li><Link to="/home"> <BsHouseDoorFill/></Link> </li>
                       <li><Link to="/home/counter"><BsFillBagFill style={{color:"#ff8d00"}} /><span>{count}</span> </Link> </li>
                       <li onClick={()=>dispatch(weaterdiplay(true))}><Link to="/home"><BsFillBrightnessAltHighFill/></Link></li> 
                       <div  onClick={()=>setYourprofile(!yourprofile)} className="thisProfile">
                       {username.map((data,i)=><div key={i} className="MenName"><span ></span><a style={{width:"40%"}}>{data.firstname}</a></div>)}
                        <div className="thisProfileInfo" style={{display:yourprofile ? "none" : "flex"}}>
                            <div className="thisProfileInfoCantrol">
                            <div className="ThisProfileNav">
                                {username.map((data,i)=><a href={"/home/profil/"+ data._id} className="MenNameNav"><span id="thisImg"></span><a>{data.firstname} {data.lastname}</a></a>)} 
                            </div>
                            <div className="thisProfileUl">
                                <a id="profileSet"> <div className="thisProfileSettings"><FiSettings/> Setings & Private</div><span><FiChevronUp/></span>  </a>
                                <a id="preofileSet1" style={{textAlign:"left"}} href="/" onClick={()=>{localStorage.removeItem("myId")}}><div className="thisProfileSettings too"><FiShare/> Log aut </div></a>
                            </div>
                        
                       </div>
                         </div>
                       </div>
                    </div>
                   
                 </div>        
                  </div> 
        
    )
}

export default LoudNav;