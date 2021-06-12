import io from "socket.io-client";
import {useSelector} from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./chat.css";




function Chat(){

 
    const username = useSelector(state=>state.login.chatfullname);
    const [message , setMessage] = useState("");
    const [name , setName] = useState("");
    const [chatData , setChatData ] = useState([]);
    const [chatDataUbdater, setChatDateUndater] = useState([]);
    const socketRef = useRef();
    const socket = io.connect('http://localhost:9000/')
    const [userinfo , setUserinfo] = useState([])
     useEffect(()=>{
        socketRef.current = io.connect("http://localhost:9000")
        socketRef.current.on('output-messages' , (data) =>{
            setChatData(data)      
     })
      

     socketRef.current.on("chat messigeubdate", (data)=>{
        setChatDateUndater([ ...chatDataUbdater ,data])
    })

    
      return () => socketRef.current.disconnect()

     },[chatDataUbdater])

     useEffect(()=>{
        axios.get('http://localhost:9000/datashoping')
        .then(res =>{setUserinfo(res.data)})
     },[])
       
    console.log(chatData)
     const names = username.map((data,i)=>data.firstname + "  " + data.lastname).join() 
     const messagresBackground = username.map((data,i)=>data._id ).join()
     console.log(messagresBackground)
   
    const submitSoket =(e)=>{

        socketRef.current.emit('chat message', {
            message:message ,
            name: names,
            usersid: messagresBackground
            
           })
           e.preventDefault()
           setMessage('')
           setName('')
    }


console.log(messagresBackground  == "608cc29ac6c8f9113cd95d23" )
    const mailBackerFun = (data) => {
          return(
             data.map((messagename, i)=>{
                 console.log(messagename.usersid === messagresBackground)
                 if(messagename.usersid === messagresBackground){
                    return(<li style={{background:"#46fff6",alignSelf:"flex-end"}} key={i} index={i}>{messagename.name}:  {messagename.message}</li>)
                 }else if(messagename.usersid !== messagresBackground){
                    return(<li key={i} index={i}>{messagename.name}:  {messagename.message}</li>)
                 }
               
          })
        )
    }
    return(
        <div className="chatProject">
            <div className="chat-soo-contailer">
              <div className="chatUSers"> 
                 <ul>{userinfo.map((data, i)=><li key={i} index={i}>{data.firstname}: {data.lastname}</li> )}</ul>
              </div>  
              <div className="chatSoo">
                  <ul> 
                     {mailBackerFun(chatData)}
                     {/* <li>{mailBackerFun(chatDataUbdater)}</li> */}
                  </ul>    
              <form className="form" onSubmit={submitSoket}>
                 <div className="importFoto">
                 <input name="myFile" type="file" />
                  </div> 
                 <div className="messageSend">
              <input type="text"  value={message}   onChange={(e)=>{setMessage(e.target.value)}} />    
              {/* <input type="text"  value={name}  onChange={(e)=>{setName(e.target.value)}} />  */}
              <button>send</button> 
                 </div>   
              </form> 
              </div>
            </div> 
           
        </div>
    )
    
 

}

export default Chat;