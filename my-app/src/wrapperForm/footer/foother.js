import React,{useEffect,useState} from "react";
import "./footer.css";
import { RiFacebookFill,RiGithubFill,RiInstagramLine,RiLinkedinBoxFill,RiLinkedinFill,RiSkypeFill,RiTelegramFill } from "react-icons/ri";


function Footer(){

    return(
        <footer >
            <div className="FooterCantrol">
              <div className="FooterLink">
                  <div className="FooterAbout">
                   <h2>About</h2>   
                    <ul>
                        <li><a href="/home/addinfo">Add info</a></li>
                        <li><a href="/home/counter">shop</a></li>
                        <li><a href="/home/techniquenav/phone">Tecnique</a></li>
                        <li><a href="#">Books</a></li>
                        <li><a href="#">Watch</a></li>
                        <li><a href="#">Car</a></li>
                    </ul>
                  </div>
                <div className="footerHreaf">
                    <div className="socialNetworks">
                        <ul>
                            <li><a href="#"><RiFacebookFill/></a></li>
                            <li><a href="#"><RiGithubFill/></a></li>
                            <li><a href="#"><RiInstagramLine/></a></li>
                            <li><a href="#"><RiLinkedinBoxFill /></a></li>
                            <li><a href="#"><RiLinkedinFill/></a></li>
                            <li><a href="#"><RiSkypeFill/></a></li>
                            <li><a href="#"><RiTelegramFill /></a></li>
                        </ul>
                    </div>
                    <div className="footerSearch">
                        <input />
                        <button >Search</button>
                    </div>
             
                </div>
            
            </div>   
            <div className="footerBottom">
                <div style={{height:"100%",width:"81%"}} className="footerBottomCantrol">
           <span>This site was created in 2021</span>
           </div> 
                </div>     
            </div>
        </footer>
    )
}

export default Footer;