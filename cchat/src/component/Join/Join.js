import React, { useState } from 'react'
import "./Join.css";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';

let user;

const sendUser = () => {
  user = document.getElementById('joinInput').value;
  document.getElementById('joinInput').value = "";

}


const Join = () => {

  const [name, setname] = useState("");


  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="logo" />
        <h1>BaatCheet</h1>
        <input onChange={(e) => setname(e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput" />
        <Link onClick={(e) => !name ? e.preventDefault() : null} to="/chat" > <button onClick={sendUser} className='joinbtn'>Log IN</button> </Link>
      </div>
    </div>
  )
}

export default Join

export { user }