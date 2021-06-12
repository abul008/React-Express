import React, { useEffect,useState } from "react";
import data from "../../shop.json";
import "./addInfo.css";



function InputNode(){

    return(
        <div className="inputNode">
            <form  action="http://localhost:9000/creat" method="post" encType="multipart/form-data">
                <h2>Create your own information</h2>
             <div className="formNameAdd">   
            <select name="name">{data.texnika.map((data)=>{return(<option>{data.nameT}</option> )})}</select>
              <div className="AddPagetheVisiblePart">
                <span> 
                     <input type="text" name="src" id="src" placeholder="tmg_url" />
                     <input type="text" name="shopnames" id="shopnames" placeholder="model" />
                </span>  
                <span>
                     <input type="number" name="buy" id="buy" placeholder="buy" />
                     <input  type="number" name="cesh" id="cesh" placeholder="cash"/>
                 </span> 
                 <span>
                    <input type="text" name="color" id="color" placeholder="Monthly" />  
                    <input type="text" name="whereabouts" placeholder="Whereabouts" />
                </span>
                <span>
                    <input type="text" name="description" placeholder="Description" />
                    <input type="text" name="other" placeholder="other" />
                </span> 
             </div>
                <label >information</label> 
                <textarea style={{width:"100%",height:"30px"}} name="info"  maxLength="11000"  />  
                <input type="file" name="file" />
                  <span className="addButton">
                <button>Add</button>  
                    </span>  
               
             </div>

            </form>
                    
        </div>
    )
} 
export default InputNode;