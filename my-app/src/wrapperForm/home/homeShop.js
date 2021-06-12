import React, {useState,useEffect} from 'react' ; 
import LoudNav from "../navpage/homeShopNav";
import HomeshopNavbottom from "../navpage/homeShopNavBottom";
import HomePageShop from "./homePageShop";
import Homecounter from "./homeCounter";
import TechniqueNav from "../shopHeiderTechnique/techniqueNav";
import AddInfo from "../shopHeiderTechnique/addInfo";
import Weater from "../weather/weatherFunction";
import Gallery from "../galeryredux/Galery";
import Users from "../userspeople/users";
import Games from "../games/games";
import Chat from "../chat/chat";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
function Shop(){

const {id} =useParams()
	window.onscroll = function() {}
    function closs(){
        let navik = document.querySelector("nav");
        navik.style.display=" flex";
    }
    return( 
        <Router>
	<div className="ShopWrapper">
			<LoudNav></LoudNav>
     <div className="homeCenter">
		     < HomeshopNavbottom/>
     <div className="homeCenterMargin">
         <Weater />
	   <div className="homeCantrol"> 
       <div className="homepageWrapper">
           <Route path="/home/" exact component={HomePageShop}/>
           <Route path="/home/techniquenav" component={TechniqueNav} />
           <Route path="/home/counter" component={Homecounter}/>
           <Route path="/home/addinfo" component={AddInfo} />
           <Route path="/home/galery" component={Gallery} />
           <Route path="/home/chat" component={Chat} />
           <Route path="/home/games" component={Games} />
           <Route path={`/home/profil/:${id}`} component={Users} />
         </div>  	
             </div>  	 
	    </div>
     </div>              
 </div>
        </Router>

    )
 }
 
 export default Shop ;