
import React, {useState,useEffect} from "react" ;
import {FormButton} from "./styleButton";
import axios from "axios";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addinfomen,meninfo} from "../redux/login/action";
import {
    BrowserRouter as Router,
    useHistory,
    Switch,
    Route,
  } from "react-router-dom";

function Home() {
    const history = useHistory();
    const [display, setDisplay] = useState("")
    const [logindispley , setLogindispley] = useState("flex")
    const [buttondispley, setButtondispley] = useState("none")
    const {register,handleSubmit,formState:{errors}}=useForm();
    const [dataInf,setDataInf] = useState([])
    const dispatch = useDispatch();
    const [denn,setDenn] = useState([])
    const [good,setGood] = useState([])
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const login = async data=>{
        await  axios.post("http://localhost:9000/sing",data)
        .then(res=>{setDataInf(res.data);dispatch(addinfomen(res.data));localStorage.setItem("myId",JSON.stringify(res.data[0]._id))})
        dispatch(addinfomen([data]))
        history.push('/home');   
    } 
   useEffect(()=>{
        let d = new Date().getFullYear()
        let den = []
        let good = []
        for(var i = 1 ; i <= 31 ; i++){
            den = [...den, i]
        }
        for(var i = d ; i >= 1978 ; i = i - 1){
            good = [...good,i]
        }
        return (setDenn(den),setGood(good))
   },[])
  useEffect(async()=>{
      dispatch(meninfo(JSON.parse(localStorage.getItem("myId1"))))
       
  },[])

  const singUp=()=>{
    setDisplay("flex")
    setButtondispley("none")
}

const formeror=(e)=>{
    if(e.target.value == 0 || e.target.value == "" || 1 < 2){
        alert("hello")
        return false
    }
}





      return (
            <div className="singUpWrapper">
                   <div className="singInNav">
                           <h2 style={{color:"white"}}>Shop.com</h2>
                            <div  className="singInnavSearch">
                           <input type="search" placeholder="Search Product" />
                           </div>
                           <div onMouseMove={()=>{setButtondispley("flex")}} className="navSing">
                           Sing in
                           <img style={{width:"33px", padding:"14px"}} src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"/>
                           <div onMouseLeave={()=>{setButtondispley("none")}} className="SingInNav" style={{display:buttondispley }} > 
                           <button onClick={singUp}>Sing up</button>
                           <button onClick={()=>{setLogindispley("flex");setButtondispley("none")}}>Log in in</button>
                           </div>
                           </div>  
                  </div>   
               
                   <form onBlur={(e)=>{if(e.target.value == 0  ){
                               e.target.style.border="solid 2px red"
                               e.target.style.backgroundImage="url(https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png)"
                               e.target.style.backgroundPosition="right"
                               e.target.style.backgroundSize = "24px"
                               e.target.style.backgroundRepeat = "no-repeat"
                               return false
                                                                 }
                                      }} 
                                onChange={(e)=>{if(e.target.value !== 0){
                                e.target.style.border="solid 1px pink"
                                e.target.style.background= "white"
                                                                        }}}
                    className="divForm" style={{display:display}} action="http://localhost:9000/login"   method="post">  
                             
                            <div className="divForm1">
                                  <span className="spanDiv" style={{display:"flex"} }>
                                  <h2>Sing up</h2>
                                  <img onClick={()=>{setDisplay("none"); setButtondispley("block")}} style={{width:"20px" , height: "20px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/OOjs_UI_icon_close-ltr-destructive.svg/768px-OOjs_UI_icon_close-ltr-destructive.svg.png"/>
                                  </span>
                                <div className="divInput">
                                    <input onBlur={(e)=>{if(e.target.value.length === 0){console.log("hello")}}} required="true" minLength="4" type="text" placeholder="name" name="firstname" id="name"  />
                                    <input minLength="4" type="text" placeholder="Surname" id="surname"  name="lastname" required />
                                </div >
                                     <input type="mail" placeholder="mail" id="mail" name="reg_email"  required/>
                                     <input minLength="6" type="password"placeholder="password" id="password" name="reg_passwd" required  />
                                <div className="singSelect">
                                    <select required name="month" onClick={(e)=>{console.log(e.target.value)}}  >{months.map((item,i)=><option key={i}>{item}</option>)}</select>
                                    <select name="good" >{good.map((item,i)=><option value={item} key={i}>{item}</option>)}</select>
                                    <select name="dey"  >{denn.map((item,i)=><option value={item} key={i}>{item}</option>)}</select>
                                </div>
                                <div className="label gender" >
                                <span>
                                    <label for="men">men</label>
                                    <input id="men" value="men" name="gender"    type="radio" />
                                </span>
                                    <span>
                                    <label for="girl">girl</label>
                                    <input id="girl" value="girl"   name="gender"  type="radio"  /></span>
                                </div>
                                    <FormButton ></FormButton>
                            </div>
                    </form> 
                    <form className="login" onSubmit={handleSubmit(login)} style={{display:logindispley }} >
                           <div className="loginForm1">
                               <span className="spanDiv" style={{display:"flex"} }>
                               <h2>Sing up</h2>
                               <img onClick={()=>{setLogindispley("none");setButtondispley("block")}} style={{width:"20px" , height: "20px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/OOjs_UI_icon_close-ltr-destructive.svg/768px-OOjs_UI_icon_close-ltr-destructive.svg.png"/>
                               </span>
                                 <input {...register("login",{required:true})}   type="text" placeholder="mail.ru"   />
                                 <input  {...register("password",{required:true})}  type="password" placeholder="password" />
                                 <FormButton type="submit" formaction="/home"></FormButton>
                            </div>
                    </form>
            </div>         
  )
 }

    export  default Home;

