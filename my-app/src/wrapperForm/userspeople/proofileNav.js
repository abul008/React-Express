import React  from "react";


const NavProfile=(props)=>{

   return(
         <div className="profileNav">
           <ul>
             <a href={props.post}><li>my announcements</li></a>
             <a href={props.about} ><li>About</li></a>
             <a href={props.frends}><li>Frends</li></a>
             <a href={props.photo}><li>Photo</li></a> 
          </ul>
         </div>
   )
}

export default NavProfile;