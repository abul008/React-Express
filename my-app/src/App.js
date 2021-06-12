
import './App.css';
import React from "react";
import Nav from "./wrapperForm/navpage/Nav";
import Home from "./wrapperForm/home/home";
import Homeshop from "./wrapperForm/home/homeShop";
import Allusers from "./wrapperForm/home/table";
import Footer from "./wrapperForm/footer/foother";
// import "./wrapperForm/header.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="wrapper">
        <Nav style={{displey:"none"}} ></Nav>
        <Route path="/" exact component={Home} />
        <Route path="/table"  component={Allusers} />
        <Route  path="/home" component={Homeshop} />
        <Footer />
      </div>
    </div>
     </Router>
  );
}


export default App;
