import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import "./Login.css";

function Login() {

    const navigate=useNavigate();
    const [data,setData]=useState({
        email:"",
        password:""
    })

    function handleChange(e){
        const val=e.target.value
        setData({...data,[e.target.name]:val})

    }
    async function handleSubmit(){
        await axios.post("http://localhost:5000/api/alumni/login",data).then(res=>{
            localStorage.setItem("alumniToken",res.data.token)
            localStorage.setItem("id",res.data.id)
            localStorage.setItem("name",res.data.name)

        }).then(()=>{
            swal("Hello", "Login Successful", "success");
        }).then(()=>{
             navigate("/alumni")

        }).catch(()=>{
            swal("Sorry", "Invalid User", "error");

        })
        
    }

  return (
    <div className='login-main-container'>
        <div >
            <div className='manager-div-2'>

                <div className="signup-header">
                    <h2>
                        Login
                    </h2>
                </div>	
                <div className='names'>


                    <input
                        style={{"width":"240px"}}
                        type = "text"
                        placeholder = "Enter Your Email"
                        name = "email"
                        onChange={handleChange}
                        value={data.email}
                        className = ""
                    />
        </div>
        <div className='names'>
        <input
            style={{"width":"240px"}}
			type = "text"
			placeholder = "Enter Your Password"
			name = "password"
			onChange={handleChange}
			value={data.password}
			className = ""
		/>

        </div>
        <div className='button-container-div'>
		<button 
        style={{"marginTop":"60px"}}
        onClick={handleSubmit} className="signup-button">
			Login
		</button>
		</div>

            </div>
        </div>
    </div>
  )
}

export default Login