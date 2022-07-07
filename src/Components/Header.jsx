import React from "react";
import logo from "../Media/postguru.jpg";
import {NavLink} from "react-router-dom";


function Header(){
  return (<>
    <div className= "logo">
    <img src={logo} alt = {"PostGuru-Logo"}/>
    </div>

        <div className= "navBar">
        <ul className="nav justify-content-center">
  <li className="nav-item">
    <NavLink className="nav-link " to={"/"}>HOME</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to={"/work"}>WORK</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to={"/about"}>ABOUT</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to ={"/contact"}>CONTACT</NavLink>
  </li>
</ul>
</div>
    </>
  )
}

export default Header;
