import React from 'react'
import { useState , useContext} from 'react';
import axios from "axios";
import {contextData} from "../Context/UserContext"
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { NotificationState } from '../Context/UserContext';

function AdminLogin() {
    const {setVideoOn}=NotificationState()
    const [adminData,setAdminData]=useState({
        email:"",
        password:""
    })
    const {contextToken,setContextToken}=useContext(contextData)
    

    const navigate=useNavigate();

    function handleChange(e){
        const val=e.target.value;
        setAdminData({...adminData,[e.target.name]:val})


    }

    async function handleSubmit(e){
        e.preventDefault();
        
        try{
           await axios.post("http://localhost:5000/api/admin/login",adminData).then(res=>{
                //setContextToken(res.data.token)
                localStorage.setItem("token",res.data.token);
           }).then(res=>{
            swal("Welcome Admin...", "Login Successful", "success");
                
           }).then(res=>{
                navigate('/adminpage')
                setVideoOn(
                    {audio:true,video:true}
                  )

           })
           
           

        }catch(e){
            console.log(e);
        }
    }
  return (
    <div className='login-main-container'>
    <div >
        <div className='manager-div-2'>

            <div className="signup-header">
                <h2>
                   Admin Login
                </h2>
            </div>
            <div className="names">
        <input
            style={{"width":"240px"}}
            type = "email"
            placeholder = "Enter Email"
            name = "email"
            onChange = {handleChange}
            value = {adminData.email}
            
            className = ""
        />
        </div>
        <div className="names">
        <input
            style={{"width":"240px"}}
            type = "text"
            placeholder = "Enter Password"
            name = "password"
            onChange = {handleChange}
            value = {adminData.password}
            
            className = ""
        />
        <button 
            style={{"marginTop":"60px"}}
        onClick={handleSubmit} className="signup-button">
            Login
        </button>
        </div>

            </div>
            </div>
            </div>
 /*    <div>
    <div className="admin-login">
        <input
            type = "email"
            placeholder = "Create Email"
            name = "email"
            onChange = {handleChange}
            value = {adminData.email}
            
            className = ""
        />

        <input
            type = "text"
            placeholder = "Enter Password"
            name = "password"
            onChange = {handleChange}
            value = {adminData.password}
            
            className = ""
        />
        <button onClick={handleSubmit} className="signup-button">
            Login
        </button>
        </div>
    </div> */
  )
}

/* 
  "email":"admin1@gmail.com",
  "password":"admin"
*/

export default AdminLogin