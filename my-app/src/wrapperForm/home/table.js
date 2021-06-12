import React, { Component } from "react" ;
import {StyledButton,RedButton} from "./styleButton";
import icon from "src../../../public/icon.png";
import {TableButton, SpanButton} from "./styleButton";
import { getQueriesForElement } from "@testing-library/dom";
// import Button1 from "../function";
// import Button1 from "../function" ; 
// import Web from "../weather/weatherFunction";


export default class Alluser extends Component {
    constructor(props) {
        super(props);
    this.state={
        allUsers: [],
        ubdate: false,
        selectInp: [],
        mail: " ",
        name : " ",
        surname: " ",
        mail: " ",
        password: "",
        checked: " " ,
        allUser: "",
        display: true ,
        tableSort: [],
    };
    }


getInputValue = (e) =>{
  switch(e.target.id){
   case "name" :
   this.setState({name:e.target.value})
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
   case "checked":
   this.setState({checked: e.target.value})
   break
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
        user.checked = this.state.checked
        localStorage.setItem(this.state.mail,JSON.stringify(user))
    }
    olUsers = () =>{
        let ObjectCase =  Object.keys(localStorage)
            let values = [];
            for(let i = 0; i < ObjectCase.length; i++){
                values.push(JSON.parse(localStorage.getItem(ObjectCase[i])));
    } 
            this.setState({allUsers:values})
            // console.log(values)
}
async componentDidMount(){
    await this.olUsers()
    console.log(this.state.allUsers)
}

DeletLocal = (e) => {
    localStorage.removeItem(e.target.id);
    this.setState({ubdate:true});
}
componentDidUpdate(){
    if(this.state.ubdate){
        this.olUsers();
        this.setState({ubdate: false})
    }
}
select = (e) => {
    let f1 = [...this.state.selectInp];
    var n = f1.indexOf(e.target.id);
    if(e.target.checked){
       f1.push(e.target.id);
       console.log(f1)
    }else if(e.target.checked === false){
        delete f1[n]
        console.log(f1)
    }
    this.setState({selectInp: f1})
}
tdDelet = () => {
    this.state.selectInp.forEach(element => {
        localStorage.removeItem(element);
    });
    this.setState({ubdate:true})
    console.log("Jsom")
    
}

InfoLocal = (e) => {
    let my = JSON.parse(localStorage.getItem(e.target.id))

     this.setState({display: false,name:my.name,surname:my.surname,mail:my.mail,password:my.password})
    console.log(my)
    
}
changelocal = (e) => {
    let ObjectCase =  Object.keys(localStorage)
    let values = [];
    for(let i = 0; i < ObjectCase.length; i++){
        values.push(JSON.stringify(localStorage.getItem(ObjectCase[i])));
} 
}
clossTableForm = (e) => {
    this.setState({display: true})

}
    render(){
  return (
    <div className="Table">
        <table className="tableth">
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Select</th>
                    <th onClick={()=>{
                        let ObjectCase =  Object.keys(localStorage)
                        let values = [];
                        let name = [];
                        console.log(ObjectCase)
                        for(let i = 0; i < ObjectCase.length; i++){
                            values.push(JSON.parse(localStorage.getItem(ObjectCase[i])));
                       }
                       for(let i = 0; i < values.length ; i++ ){
                           name.push(values[i].name);
                       }
                      let arr =  name.sort()
                       console.log(...arr) ; 
                       this.setState({tableSort:arr});
                    }}>Name</th>
                    <th>Surnameame</th>
                    <th>Mail</th>
                    <th>Password</th>
                    <th>Gender</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>     
                {   
                    this.state.allUsers.map((values,i)=><tr key={i}>
                        <td>{i+1}</td>
                        <td><input onChange={this.select} type="checkbox" id={values.mail}/></td>   
                        <td>{values.name}</td> 
                        <td>{values.surname}</td>
                        <td>{values.mail}</td>
                        <td>{values.password}</td>
                        <td>{values.checked}</td>
                        <td>
                            <img onClick={this.InfoLocal} id={values.mail} src="https://img.icons8.com/pastel-glyph/2x/info--v1.png" />
                            <img onClick={this.DeletLocal} id={values.mail} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/OOjs_UI_icon_close-ltr-destructive.svg/768px-OOjs_UI_icon_close-ltr-destructive.svg.png" />
                        </td>
                        
                       </tr>
                    ) 
                }         
            </tbody>
            
        </table>
        <div className="localInput">
            <form style={{display:  this.state.display ? 'none' : 'flex' , background:"linear-gradient(#00c6ff,#0072ff)", fontfamily:" monospace" , borderadius:"12px"}} >
                <SpanButton>
                 <h2>Sing in</h2>   
                <img src={icon} onClick={this.clossTableForm}  style={{width:"30px", height:"30px"}} />
                </SpanButton>
                <input onChange={this.getInputValue} id="name" value={this.state.name} />
                <input onChange={this.getInputValue} id="surname"  value={this.state.surname} />
                <input onChange={this.getInputValue} id="mail"  value={this.state.mail} />
                <input onChange={this.getInputValue} id="password"  value={this.state.password} />
                <input onChange={this.getInputValue} id="checked"   value={this.state.checked} />
                <span>
                <TableButton onClick={this. butClick} >send</TableButton>
                <TableButton send >closs</TableButton>
                </span>
            </form>
            {/* <button onClick={this.butClick}>send</button> */}
        </div>
        <div className="tableButton">
        {/* <StyledButton onClick={this.tdDelet}bord>Delete all</StyledButton> */}
        {/* <RedButton onChange={this.olUsers}>HAHA</RedButton>  */}
        </div>
        {/* <Web></Web>    */}
    </div>
    
  );
    }
}