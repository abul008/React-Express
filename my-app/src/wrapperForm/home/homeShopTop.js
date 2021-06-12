import React, {useState,useEffect} from 'react' ; 
import { Link } from 'react-router-dom';


function HomeshopTop(){
    return(
        <div className="homeTop">
               <div className="homeCenterMarginTop">
				   <div className="scrollCenter">
		 			  <div className="scroll" id="scrollhreaf"  >
						 <img src="https://n4.sdlcdn.com/imgs/j/p/2/MS_ClimateSeeds_WebPlat-5695f.jpg"></img>
					  </div>
					  <div className="scroll" id="scrollhreaf1"  >
						 <img src="https://n3.sdlcdn.com/imgs/j/p/k/1140x282-63d75.jpg"></img>
					  </div>
					  <div className="scroll" id="scrollhreaf2"  >
						 <img src="https://n3.sdlcdn.com/imgs/j/p/t/Villain_WebPlat-a40f4.jpg"></img>
					  </div>
					  <div className="scroll" id="scrollhreaf3"  >
						 <img src="https://n4.sdlcdn.com/imgs/j/e/d/HP_1140X282-3d806.jpg"></img>
					  </div>
					</div>  
					<div className="wrapperScrollHreaf"> 
				   <a href="#scrollhreaf">Perfumes</a>
				   <a href="#scrollhreaf1">Seeds</a>
				   <a href="#scrollhreaf2">Blue Heaven</a>
				   <a href="#scrollhreaf3">Perfumes</a>
				   </div>
                </div>
			</div>
    )
}

export default HomeshopTop;



