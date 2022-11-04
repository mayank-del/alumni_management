import React from 'react';
import "./Home.css";
import logo from "../images/Heritage-University.png";
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate=useNavigate();
  return (
    <div className='header-main'>
        <div className="login-signup">
            <div className='header-college-name'>
                <h3>
                    Please login here
                </h3>
            </div>
            <div className="login-right">
                <div >
                    <button onClick={()=>{navigate("/login")}} className="login-nav">
                        Login
                    </button>
                </div>

                <div >
                    <button onClick={()=>{navigate("/signup")}} className="login-nav">
                        Signup
                    </button>
                </div>
                <div >
                    <button onClick={()=>{navigate("/adminlogin")}} className="login-nav">
                        Admin
                    </button>
                </div>
                <div >
                    <button onClick={()=>{localStorage.clear()
                                        navigate("/")}} className="login-nav">
                        Logout
                    </button>
                </div>
            </div>
        </div>
        <div className="head-navs">
            <div className="head-left">
               <img src={logo} alt="" /> 
            </div>
            <div className="head-right">
                <div onClick={()=>{navigate("/")}} className="home-nav">
                    Home
                </div>
                <div onClick={()=>{navigate("/event")}} className="home-nav">
                    Event
                </div>
                <div onClick={()=>{navigate("/jobs")}} className="home-nav">
                    Jobs
                </div>
                <div onClick={()=>{navigate("/alumni")}} className="home-nav">
                    Alumni
                </div><div onClick={()=>{navigate("/contact")}} className="home-nav">
                    Contact
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header