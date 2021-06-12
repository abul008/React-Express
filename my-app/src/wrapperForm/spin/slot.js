import React from "react";
import "./slot.css";
import {useState,Component } from  "react";
import {BsX} from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import {Howl} from "howler" ;




const Spin=()=>{ 

const [axis ,setAxis] = useState({axis1:1,axis2:5,axis3:7,axis4:5,axis5:3,axis6:4,axis7:7,axis8:5,axis9:7,axis10:4,axis11:4,axis12:4,axis13:2,axis14:4,axis15:1,axis16:4,axis17:5,axis18:3,axis19:5,axis20:3,})  
const [names ,setNames] = useState({names1:"",names2:"",names3:"",names4:"",names5:"",names6:"",names7:"",names8:"",names9:"",names10:"",names11:"",names12:"",names13:"",names14:"",names15:"",names16:"",names17:"",names18:"",names19:"",names20:""})
const [mony ,setMoney] = useState(20000);
const [size , setSize] = useState(10);
const [scroll , setScroll] = useState("");
const [animation,setAnimation] =useState(true)


   
 

    function playBoing(){
        const boing = document.getElementById('boing');
        boing.play()
    }

    function showMessage(){
        const msg = document.getElementById('message');
        msg.style.display = "block" ;
        msg.classList.add('animated' , "pulse")
    }
    function hideMessage() {
        const msg = document.getElementById("message");
        msg.style.display = "none";
    }
      
   
     const axisFun=(min,max)=>{
         return Math.floor(Math.random()*(max - min + 1)) + min
     } 
     let countre = []
     let countre1 = []
     let countre2 = []
     let countre3 = []
     let countre4 = []
     for( let i = 0; i<= 20; i++){
          countre.push(((Math.floor(Math.random()*2) + Math.floor(Math.random() * 7) )))
     }
     for( let i = 0; i<= 20; i++){
          countre1.push(((Math.floor(Math.random()*2) + Math.floor(Math.random() * 7) )))
     }
     for( let i = 0; i<= 20; i++){
          countre2.push(((Math.floor(Math.random()*2) + Math.floor(Math.random() * 7) )))
     }
     for( let i = 0; i<= 20; i++){
          countre3.push(((Math.floor(Math.random()*2) + Math.floor(Math.random() * 7) )))
     }
     for( let i = 0; i<= 20; i++){
          countre4.push(((Math.floor(Math.random()*2) + Math.floor(Math.random() * 7) )))
     }
  
      
     function Spin1(){
              setAnimation(false)
              setScroll("example"); 
      if(axis.axis1 === axis.axis5 && axis.axis1 === axis.axis9 && axis.axis1 === axis.axis13 && axis.axis1 === axis.axis17 ){  
            setNames({...names,names1:"names",names5:"names",names9:"names",names13:"names",names17:"names" })
            setMoney(mony + size * 25)
            playBoing();
            showMessage();
    }else if(axis.axis2 === axis.axis6 && axis.axis2 === axis.axis10 && axis.axis2 === axis.axis14 && axis.axis2 === axis.axis18){
            setMoney(mony + size * 25)
            playBoing();
            showMessage();
            setNames({...names,names2:"names",names6:"names",names10:"names",names14:"names",names18:"names" })

    }else if(axis.axis3 === axis.axis7 && axis.axis3 === axis.axis11 && axis.axis3 === axis.axis15 && axis.axis3 === axis.axis19){
            setMoney(mony + size * 25)
            playBoing();
            showMessage();
            setNames({...names,names3:"names",names7:"names",names11:"names",names15:"names",names19:"names" })
    }else if(axis.axis4 === axis.axis8 && axis.axis4 === axis.axis12 && axis.axis4 === axis.axis16 && axis.axis4 === axis.axis20){
            setMoney(mony + size * 25)
            playBoing();
            showMessage();
            setNames({...names,names4:"names",names8:"names",names12:"names",names16:"names",names20:"names" })
    }else if(axis.axis1 === axis.axis5 && axis.axis1 === axis.axis9){
            setNames({...names,names1:"names",names5:"names",names9:"names", })
            setMoney(mony + size * 8)
    } else if (axis.axis9 === axis.axis13 && axis.axis9 === axis.axis17 ) {
            setNames({...names,names9:"names",names13:"names",names17:"names" })
            setMoney(mony + size * 8)
    }else if (axis.axis2 === axis.axis6 && axis.axis2 === axis.axis10 ) {
            setNames({...names,names2:"names",names6:"names",names10:"names" })
            setMoney(mony + size * 8)
    }else if (axis.axis10 === axis.axis14 && axis.axis10 === axis.axis18 ) {
        setNames({...names,names10:"names",names14:"names",names18:"names" })
            setMoney(mony + size * 8)
    }else if (axis.axis3 === axis.axis7 && axis.axis3 === axis.axis11) {
        setNames({...names,names3:"names",names7:"names",names11:"names" })
            setMoney(mony + size * 8)
    }else if (axis.axis11 === axis.axis15 && axis.axis11 === axis.axis19) {
        setNames({...names,names11:"names",names15:"names",names19:"names" })
            setMoney(mony + size * 8)
    }else if (axis.axis4 === axis.axis8 && axis.axis4 === axis.axis12 ) {
        setNames({...names,names4:"names",names8:"names",names12:"names" })
            setMoney(mony + size * 8)
    }else if (axis.axis12 === axis.axis16 && axis.axis12 === axis.axis20 ) {
        setNames({...names,names12:"names",names16:"names",names20:"names" })
            setMoney(mony + size * 8)
    }
    else{
        hideMessage();
          setMoney(mony - size)
    }
        
    }
 
    
   
  
   function Spin(){

      setAnimation(true)
      setScroll("")
      setNames({...names,names1:"",names2:"",names3:"",names4:"",names5:"",names6:"",names7:"",names8:"",names9:"",names10:"",names11:"",names12:"",names13:"",names14:"",names15:"",names16:"",names17:"",names18:"",names19:"",names20:""})
    
   
       setAxis(
           {...axis,
        axis1:axisFun(Math.floor(Math.random()*2) +1,7),
        axis2:axisFun(Math.floor(Math.random()*2) +1,7),
        axis3:axisFun(Math.floor(Math.random()*2) +1,7),
        axis4:axisFun(Math.floor(Math.random()*2) +1,7),
        axis5:axisFun(Math.floor(Math.random()*2) +1,7),
        axis6:axisFun(Math.floor(Math.random()*2) +1,7),
        axis7:axisFun(Math.floor(Math.random()*2) +1,7),
        axis8:axisFun(Math.floor(Math.random()*2) +1,7),
        axis9:axisFun(Math.floor(Math.random()*2) +1,7),
        axis10:axisFun(Math.floor(Math.random()*2) +1,7),
        axis11:axisFun(Math.floor(Math.random()*2) +1,7),
        axis12:axisFun(Math.floor(Math.random()*2) +1,7),
        axis13:axisFun(Math.floor(Math.random()*2) +1,7),
        axis14:axisFun(Math.floor(Math.random()*2) +1,7),
        axis15:axisFun(Math.floor(Math.random()*2) +1,7),
        axis16:axisFun(Math.floor(Math.random()*2) +1,7),
        axis17:axisFun(Math.floor(Math.random()*2) +1,7),
        axis18:axisFun(Math.floor(Math.random()*2) +1,7),
        axis19:axisFun(Math.floor(Math.random()*2) +1,7),
        axis20:axisFun(Math.floor(Math.random()*2) +1,7),
           })
      
    
   }
   return(<div className="wrapperGames">
            <div className="slotGames">
                <div className="slotCantrol">
                 <div className="slottitleAndCloss">
                 {/* <span>Slot Games</span> */}
                 <div className="mony">{mony}AMD</div>
                 <BsX/>   
                 </div>   
                 
                 <div className="slotForma">
                    <table >
                        <tbody className="slotRotate" >
                    <div className="tr">
                          <tr className="animationTr" style={{animationName:scroll }}>
                             <td style={{animationName:names.names1}}><img src={`/axis/axis${axis.axis1}.png`}/></td> 
                             <td style={{animationName:names.names2}}><img src={`/axis/axis${axis.axis2}.png`}/></td>
                             <td style={{animationName:names.names3}}><img src={`/axis/axis${axis.axis3}.png`}/></td>     
                             <td style={{animationName:names.names4}}><img src={`/axis/axis${axis.axis4}.png`}/></td> 
                             { countre.map((data,i)=><td key={i}><img src={`/axis/axis${data}.png`}/></td>)}
                                  
                         </tr> 
                    </div>   
                    <div className="tr">
                         <tr className="animationTr1"  style={{animationName:scroll }}>
                             <td style={{animationName:names.names5}}><img src={`/axis/axis${axis.axis5}.png`}/></td>
                             <td style={{animationName:names.names6}}><img src={`/axis/axis${axis.axis6}.png`}/></td>   
                             <td style={{animationName:names.names7}}><img src={`/axis/axis${axis.axis7}.png`}/></td> 
                             <td style={{animationName:names.names8}}><img src={`/axis/axis${axis.axis8}.png`}/></td>
                             { countre1.map((data,i)=><td key={i}><img src={`/axis/axis${data}.png`}/></td>)}
                                    
                         </tr>
                    </div>   
                    <div className="tr">
                         <tr className="animationTr2"  style={{animationName:scroll}}>
                             <td style={{animationName:names.names9}}><img src={`/axis/axis${axis.axis9}.png`}/></td>
                             <td style={{animationName:names.names10}}><img src={`/axis/axis${axis.axis10}.png`}/></td>  
                             <td style={{animationName:names.names11}}><img src={`/axis/axis${axis.axis11}.png`}/></td>
                             <td style={{animationName:names.names12}}><img src={`/axis/axis${axis.axis12}.png`}/></td> 
                             { countre2.map((data,i)=><td key={i}><img src={`/axis/axis${data}.png`}/></td>)}
                    </tr> 
                    </div>   
                    <div className="tr">
                         <tr className="animationTr3" style={{animationName:scroll }}>
                             <td style={{animationName:names.names13}}><img src={`/axis/axis${axis.axis13}.png`}/></td> 
                             <td style={{animationName:names.names14}}><img src={`/axis/axis${axis.axis14}.png`}/></td>
                             <td style={{animationName:names.names15}}><img src={`/axis/axis${axis.axis15}.png`}/></td> 
                             <td style={{animationName:names.names16}}><img src={`/axis/axis${axis.axis16}.png`}/></td> 
                             { countre3.map((data,i)=><td key={i}><img src={`/axis/axis${data}.png`}/></td>)}
                         </tr>
                    </div>    
                    <div className="tr">      
                          <tr className="animationTr4"  style={{animationName:scroll }}>
                             <td style={{animationName:names.names17}}><img src={`/axis/axis${axis.axis17}.png`}/></td>
                             <td style={{animationName:names.names18}}><img src={`/axis/axis${axis.axis18}.png`}/></td> 
                             <td style={{animationName:names.names19}}><img src={`/axis/axis${axis.axis19}.png`}/></td> 
                             <td style={{animationName:names.names20}}><img src={`/axis/axis${axis.axis20}.png`}/></td>
                             { countre4.map((data,i)=><td key={i}><img src={`/axis/axis${data}.png`}/></td>)}
                          </tr>
                    </div>           
                        </tbody>
                    </table>
                    
                    <div className="slotLily"></div>
                    <div style={{animationName:animation ? "" : "animationOne" }} className="slotFormaAnimation animationOne"></div>
                    <div style={{animationName:animation ? "" : "animationtwoo" }}  className="slotFormaAnimation animationtwo"></div>
                    <div style={{animationName:animation ? "" : "animationtree" }}   className="slotFormaAnimation animationtree"></div>
                    <div style={{animationName:animation ? "" : "animationfour" }}  className="slotFormaAnimation animationfour"></div>
                    
                </div>
                <div className="slotStavkaSize">
               
                    
  
                    <div className="stavkaSize">
                       <select  onClick={(e)=>{setSize(parseInt(e.target.value))}}>
                           <option>10</option>
                           <option>50</option>
                           <option>100</option>
                           <option>150</option>
                           <option>250</option>
                           <option>500</option>
                       </select>
                    </div>
                   
                    <div className="SlotCenter">
                    <button onMouseDown={Spin} onMouseUp={Spin1}>
                        <img style={{animationName:animation? " " : "rotate"}} src="https://www.searchpng.com/wp-content/uploads/2018/12/Spinning-wheel.png"></img>
                   </button>
                    </div>
                </div>
            </div>    
            </div>  
            
       <div className="slotWrapper">
           <div id="message">
               You know
           </div>   
    
                  
           <audio id="boing">
           {/* <source src="horse.mp3" type="audio/mpeg"></source> */}
            
  
              
           </audio>

    
             
       </div>
       
    </div>
   )

}

export default Spin;