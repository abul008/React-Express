import React,{useState,useEffect} from "react";
import data from "../../shop.json";
import "./techniqueNav.css";
import Caruselmanu from "../shopHeider/caruselManu";
import ShopHeader from "../shopHeider/shopheiderprops";
import Tabletshop from "./shopHeiderTechniqueManu/tabletShop";
import Phoneshop from "../shopHeiderTechnique/shopHeiderTechniqueManu/phoneShop";
import Watchshop from "./shopHeiderTechniqueManu/watchShop";
import InputNode from "./addInfo";
import tvshop from "./shopHeiderTechniqueManu/tvShop1";
import Compshop from "./shopHeiderTechniqueManu/computers";
import Shopproduct from "../shopHeider/peoductShop";
import Accesories from "../shopHeiderTechnique/shopHeiderTechniqueManu/accesories";
import Photocameras from "../shopHeiderTechnique/shopHeiderTechniqueManu/fotoCamers";
import Carusel from "../carouselComponent/carusel";
// import ShopHeader from "../shopHeider/shopheiderprops";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";


function TechniqueNav(){
    const {id} =useParams()
    const [add,setAdd] = useState([])

    useEffect(()=>{
        fetch('http://localhost:9000/datashop')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setAdd(data)
        });
    },[]) 

    return(
      <div>
        <Router>
        <div className="phonesShop">
                 <div className="CaruselCantrol">
        <div className="CaruselImg">
                <Carusel src="/caruselPhoto/carusel.jpg" src1="/caruselPhoto/carusel1.jpg" src2="/caruselPhoto/carusel2.jpg" />
        </div>
         <div className="caruselManu">
                <Caruselmanu data={data.texnika} />
         </div>
         </div> 
        <Route path="/home/techniquenav/phone" component={Phoneshop} />
        <Route path="/home/techniquenav/tablet" component={Tabletshop} />
        <Route path="/home/techniquenav/watch" component={Watchshop} />
        {/* <Route path="/home/techniquenav/equipments" component={InputNode} /> */}
        <Route path="/home/techniquenav/tv" component={tvshop} />
        <Route path="/home/techniquenav/accesories" component={Accesories} />
        <Route path="/home/techniquenav/photocameras" component={Photocameras} />
        <Route path="/home/techniquenav/computer" component={Compshop} />
        <Route path={`/home/techniquenav/product/:${id}`}  component={Shopproduct}/>
        {/* <ShopHeader data={add}/>  */}
        </div> 
        </Router>

        </div>
    )
}
export default TechniqueNav;