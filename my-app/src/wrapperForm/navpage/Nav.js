// import React from "react" ;
import {Link} from 'react-router-dom';
import React, {useEffect, useState} from "react" ;
import {useDispatch,useSelector} from "react-redux";
import "./nav.css"
import { TiThMenu } from "react-icons/ti";
import { TiArrowUp } from "react-icons/ti";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function Nav() {
  const navStyle = {
    // color: "white",
    // textDecoration: "none",
    // padding:" 7px 35px ",
    // borderRadius: "10px",
    // background: "green",
  };
  const [background,setBackground] = useState("linear-gradient(rgb(255 255 255), rgb(255 255 255))");
  const [border,setBorder] = useState("none");
  const [border1,setBorder1] = useState("none ");
  const [border2,setBorder2] = useState("none ");
  const [border3,setBorder3] = useState("none ");
  const [navtop , setNavtop] = useState(true);

  const nav = useSelector(state => state.login.navdislplay)
  const info = useSelector(state => state.login.info)
  const [users , setUSers] =useState(localStorage.getItem("myId")) 


  return (
     <nav  style={{background: background,display:users ? "none" : 'none'}}  >
       <Link  className={"LinkH3"} style={{textDecoration:"none",borderBottom: border3}} onClick={()=>{ setBackground("linear-gradient(#56ab2f,#a8e063)"); setBorder("");setBorder1("none");setBorder2("");setBorder3("4px black solid")}}  to="/">
         <span style={{display:"flex",alignItems:"center"}}>
         <img style={{width:"80px",height:"50px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"></img>
         <h3  style={{letterSpacing: "2px",fontSize: "22px",fontFamily: "ui-monospace",color: "black"}}>React App</h3>
         </span>
         </Link>
         <ul  className="NavLinks">
           <Link className="aHreaf click" style={{borderBottom: border}}   onClick={()=>{ setBackground("linear-gradient(#FF416C,#FF4B2B)"); setBorder("4px black solid");setBorder1("none");setBorder2("");setBorder3("none")}} to="/about">
             <li >
               <img  style={{width:"30px"}} src="https://static.thenounproject.com/png/6478-200.png" />
             </li>
            </Link>
           <Link className="aHreaf" style={{borderBottom: border1}} onClick={()=>{ setBackground("linear-gradient(#FDC830,#F37335)"); setBorder("");setBorder1("4px black solid");setBorder2("");setBorder3("none")}}   to="/table"> 
             <li to="/link">
               <img style={{width: "30px"}} src="https://image.flaticon.com/icons/png/512/104/104123.png" />
             </li>
          </Link>
          <Link  className="aHreaf" style={{ borderBottom: border2, }} onClick={()=>{ setBackground("linear-gradient(#56ab2f,#a8e063)"); setBorder("");setBorder1("none");setBorder2("4px black solid");setBorder3("none")}}  to="/"> 
             <li to="/home"  >
              <img style={{width:"30px"}} src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png" />
             </li>
          </Link>
         </ul>
           <div  className="ManuHamb">
              <span onClick={()=>{setNavtop(!navtop)}}>{navtop ? <TiThMenu/> : <TiArrowUp/> }</span>
              <ul style={{top:navtop ? "-72px" : "40px",zIndex:navtop? "-2" : "2"}}  className="NavLinksB">
           <Link className="aHreaf click" style={{borderBottom: border}}   onClick={()=>{ setBackground("linear-gradient(#FF416C,#FF4B2B)"); setBorder("4px white solid");setBorder1("none");setBorder2("");setBorder3("none")}} to="/about">
                Galery
            </Link>
           <Link className="aHreaf" style={{borderBottom: border1}} onClick={()=>{ setBackground("linear-gradient(#FDC830,#F37335)"); setBorder("");setBorder1("4px white solid");setBorder2("");setBorder3("none")}}   to="/table"> 
               Table
          </Link>
          <Link  className="aHreaf" style={{ borderBottom: border2, }} onClick={()=>{ setBackground("linear-gradient(#56ab2f,#a8e063)"); setBorder("");setBorder1("none");setBorder2("4px white solid");setBorder3("none")}}  to="/"> 
                home
          </Link>
         </ul>
           </div>        
     </nav>
  );
}

export default Nav;
