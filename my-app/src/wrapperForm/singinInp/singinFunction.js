import React, {useState} from "react" ;

function SinginFunction(){

    const [display,setDisplay] = useState("block");
    const [name, setName] = useState("Anna");


return <div>
         <div style={{display: display, background:"red"}}>
             <h1 onClick={()=>{setName("Aram")}}>{name}</h1>
             <button onClick={()=>{setDisplay("none")}}>clos</button>
         </div>
         <button onClick={()=>{setDisplay("block")}}>Show with hooks</button>
   </div>

}
export default SinginFunction ;