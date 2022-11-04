import React from 'react';
import { useState } from 'react';
import "./Login.css";
import axios from "axios";
import swal from 'sweetalert';

function Signup() {
	const [data,setData]=useState({
		name:"",
        username:"",
        regno:"",
        password:"",
        dob:"",
        gender:"",
        address:"",
        mobile:"",
        email:"",
        passoutYear:"",
        company:"",
        qualification:"",
        designation:"",
	})
	function handleChange(e){
		const val=e.target.value
        setData({...data,[e.target.name]:val})
		
        
	}
	async function handleSubmit(e){
		e.preventDefault();

		try{
			await axios.post("http://localhost:5000/api/alumni/register",data).then((res)=>
			swal("Sent for Approval", "Your request Successfully Sent to admin", "success")
				
			)
		}catch(e){
			console.log(e);
		}
	}
	function handleRadio(e){
		const {value}=e.target;
        setData({...data,gender:value})
	}

  return (
    <div className='login-main-container'>
		<div >
		<div  className='manager-div'>

			<div className="signup-header">
				<h2>
					Signup Page
				</h2>
				</div>					
		<div className='names'>


		<input
			
			type = "text"
			placeholder = "Full Name"
			name = "name"
			onChange = {handleChange}
			value = {data.name}
			
			className = ""
		/>
		<input
			type = "text"
			placeholder = "Create UserName"
			name = "username"
			onChange = {handleChange}
			value = {data.username}
			
			className = ""
		/>
		<input
			type = "text"
			placeholder = "Create Password"
			name = "password"
			onChange = {handleChange}
			value = {data.password}
			
			className = ""
		/>
			
		</div>

		<div className='address-container'>

		<input
			type = "text"
			placeholder = "Add Address"
			name = "address"
			onChange = {handleChange}
			value = {data.address}
			required
			className = ""
		/>
		</div>


		<div className='user-specification'>

		<input
			type = "date"
			placeholder = "Date of Birth"
			name = "dob"
			onChange = {handleChange}
			value = {data.dob}
			required
			className = ""
		/>

		<input
			type = "text"
			placeholder = "Enter Company"
			name = "company"
			onChange = {handleChange}
			value = {data.company}
			required
			className = ""
		/>
		
		</div>
		<div className='radios'>
						<h4>Choose your gender</h4>
						<label>
							Male
							<input type="radio" name="gender" value="male" onChange={handleRadio}/>
						</label>
						<label>
						Female
							<input type="radio" name="gender" value="female" onChange={handleRadio}/>
						</label>
						
					</div>
		<div className='user-contact'>                      
		<input
			type = "text"
			placeholder = " Enter Email"
			name = "email"
			onChange = {handleChange}
			value = {data.email}
			required
			className = ""
		/>

		<input
			type = "number"
			placeholder = "Phone Number"
			name = "mobile"
			onChange = {handleChange}
			value = {data.mobile}
			
			className = ""
		/>
		</div>
		
		<div className='Passout-yr'>


		<input
			type = "text"
			placeholder = "Passout Year"
			name = "passoutYear"
			onChange = {handleChange}
			value = {data.passoutYear}
			
			className = ""
		/>
			<input
			type = "number"
			placeholder = "Reg Number"
			name = "regno"
			onChange = {handleChange}
			value = {data.regno}
			
			className = ""
		/>
		</div>
		<div className='button-container-div'>
		<button onClick={handleSubmit} className="signup-button">
			Register
		</button>
		</div>
		</div>
		</div>
			</div>
		)
}

export default Signup