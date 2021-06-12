import React, {useState,useEffect} from 'react' ; 
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux";
import {clickBottom} from '../redux/shop/action';
import { FcBearish,FcPortraitMode,FcBriefcase,FcPhoneAndroid ,FcClock} from "react-icons/fc";
import { RiRoadsterFill} from "react-icons/ri";
import { VscBook} from "react-icons/vsc";
import { FiX} from "react-icons/fi";
import {MdExpandMore} from "react-icons/md";

function Homeshopbottom(){
    
    const [homeNav , setHomeNav] = useState(false);
    const left = useSelector(state=>state.count.click)
    const dispatch = useDispatch()
    return(
        <div  style={{right:left}} className="facebookButtonLeft">
        <div className="facebookButtonLeftTop">
             </div>
               <span onClick={()=>{dispatch(clickBottom("-350px"))}}><FiX/></span>
                 <ul>
                    <Link to="/home"><li> <FcBearish/>Covid-19 information Center</li></Link>
                    <Link to="/home/addinfo"> <li><FcPortraitMode/>Add info</li></Link>
                    <Link to="/home/counter"> <li><FcBriefcase/>Shop</li></Link>
                    <Link to="/home/techniquenav/phone"> <li><FcPhoneAndroid/>Technique</li></Link> 
                    <Link to="/home/games"><li><VscBook/>Games</li></Link>
                    <Link to="/home/chat"><li><RiRoadsterFill/>Chat</li></Link>
                    <Link to="/home/galery"><li><FcClock/>Gallery</li></Link>
                <ul style={{display:homeNav ? "block" : 'none'}}  id="facebookButtonUl">
                     <Link><li>Ad Center</li></Link>    
                     <Link to="/home"><li> <FcBearish/> Ads Manage</li></Link>
                     <Link to="/home/addinfo"> <li><FcPortraitMode/>Business Manager</li></Link>
                     <Link to="/home/counter"> <li><FcBriefcase/> Campus</li></Link>
                     <Link to="/home/techniquenav/phone"> <li><FcPhoneAndroid/>Crisi Response</li></Link> 
                     <Link to="/home/games"><li><VscBook/>Facebook Pay</li></Link>
                     <Link><li><RiRoadsterFill/>Favorites</li></Link>
                     <Link to="/home/galery"><li><FcClock/> Friend Lists</li></Link> 
                     <Link><li>Ad Center</li></Link>    
                     <Link to="/home"><li> <FcBearish/> Ads Manage</li></Link>
                     <Link to="/home/addinfo"> <li><FcPortraitMode/>Business Manager</li></Link>
                     <Link to="/home/counter"> <li><FcBriefcase/> Campus</li></Link>
                     <Link to="/home/techniquenav/phone"> <li><FcPhoneAndroid/>Crisi Response</li></Link> 
                     <Link to="/home/games"><li><VscBook/>Facebook Pay</li></Link>
                     <Link><li><RiRoadsterFill/>Favorites</li></Link>
                     <Link to="/home/galery"><li><FcClock/> Friend Lists</li></Link> 	
                 </ul>
                      <li onClick={()=>{setHomeNav(!homeNav)}} >
                      < MdExpandMore style={{transform:homeNav ? "rotate(180deg)" : "rotate(0deg)" }} />See More</li>
                 </ul>
             </div>
    )
}
export default Homeshopbottom;