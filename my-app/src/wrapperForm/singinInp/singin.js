import React, {Component} from "react";
import Input from "../ButtonInput/input";


class Singin extends Component {
    state={
        name : "",
        surname: "",
        mail: " ",
        password: "",
        allUser: "",
        login: true,
    }
    getInputValue = (e) =>{
      switch(e.target.id){
       case "name" :
       this.setState({name:e.target.value})
       console.log(e.target.value)
       break;
       case "surname":
       this.setState({surname:e.target.value})
       break;
       case "mail":
       this.setState({mail:e.target.value})
       break;
       case "password":
       this.setState({password:e.target.value})
       break;
       default:
       alert("eror")
      }
    }
    butClick = () => {
        let user = {}
        user.name = this.state.name
        user.surname = this.state.surname
        user.mail = this.state.mail
        user.password = this.state.password
        localStorage.setItem(this.state.mail,JSON.stringify(user))
    }
    getUsers = () => {
        let keys = Object.keys(localStorage);
        let values = [];
        for(let j=0;j<keys.length;j++){
            values.push(JSON.parse(localStorage.getItem(keys[j])));
        }
        this.setState({allUse: values})
    }
    
    deleteUser = () => {
        localStorage.removeItem("parol");
        localStorage.clear();
    }
    render() {
        return(
              <div className="singForm" style={this.props.singFormStayle}>
            <form method="get" action="/table" >
                <b>Sing up</b>
               <Input inputName="text" placeholder="Name" click={this.getInputValue} id="name" />
               <Input inputName="text" placeholder="Famly" click={this.getInputValue} id="surname" />
               <Input inputName="email" placeholder="E-mail" click={this.getInputValue} id="mail" />
               <Input inputName="password" placeholder="Password" click={this.getInputValue} id="password"  />
               <button onClick={this.butClick}>Button</button>
              </form> 
              <button onClick={(e)=>{this.setState({login: !this.state.login});console.log(this.state.login)}}>change</button>
              <div style={{display:this.state.login ? 'none' : 'flex'}}>hello</div>
        </div>
        )
    }
}

export default Singin;