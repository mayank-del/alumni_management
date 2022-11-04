import React from 'react';
import { useEffect } from 'react';
import axios from "axios";
import "./Alumni.css";
import { useState } from 'react';
import swal from "sweetalert"

function Alumni() {

  
  const alumniToken=localStorage.getItem("alumniToken")
  const [alumniData,setAlumniData]=useState([])
  const [selectYear,setSelectedYear]= useState(2012)

  useEffect(()=>{
    
    axios.get(`http://localhost:5000/api/alumni/${selectYear}`).then(res=>{
      setAlumniData(res.data);
    });
  },[selectYear])
  function yrDecrease(){
    setSelectedYear(selectYear-1)
  }
  function yrIncrease(){
    setSelectedYear(selectYear+1)
  }

  const [ID,setParamID]=useState(0)

  const [isAddPressed,setIsAddPressed]=useState(false)
    const [isEditPressed,setIsEditPressed]=useState(false)
    const [isDeletePressed,setIsDeletePressed]=useState(false)

  const[addData,setAddData]=useState({
    event_name:"",
    event_date:"",
    event_time:"",
    venue:"",
    event_desc:""

})
function handleChange({currentTarget:input}){
    setAddData({...addData,[input.name]:input.value})
}

async function handleAdd(){
    try{
        const url="http://localhost:5000/api/jobs/"
        const {data} = axios.post(url,addData,{
            headers:{
                "authorization": `Bearer ${localStorage.getItem("alumniToken")}`
              }
        }).then(res=>{
          swal("Inserted", "Job Inserted Successfully", "success");

      })
    }catch(e){
        console.log(e)
    }
}
async function handleEdit(){
    try{
        const url=`http://localhost:5000/api/jobs/${ID}`
        const {data} = axios.put(url,addData,{
            headers:{
                "authorization": `Bearer ${localStorage.getItem("alumniToken")}`
              }
        }).then(res=>{
          swal("Updated", "Job Updated Successfully", "success");

      })
    }catch(e){

    }
}
async function handleDelete(){
    try{
        const url=`http://localhost:5000/api/jobs/${ID}`
        axios.delete(url,{
            headers: {
              "authorization": `Bearer ${localStorage.getItem("alumniToken")}`
            },
            
          }).then(res=>{
            swal("Deleted", "Job Deleted Successfully", "success");

        })
    }catch(e){

    }
}
function handleCloses(){
    setIsAddPressed(false)
    setIsDeletePressed(false)
    setIsEditPressed(false)
}
function handleID(e){
    setParamID(e.target.value)
    console.log(ID)
}

  return (
    <div className='Alumni'>
        <div className="Alumni-container">
            <h1 className='home-h1'>
                Alumni
            </h1>

            <p className='Alumni-p'>
            Alumni Needs enables you to harness the power of your alumni network.
                whatever may be the need.
            </p>

        </div>

        {alumniToken &&
        <div 
            style={{"alignItems":"center","justifyContent":"center"}}
            className="adminpage">
        {isAddPressed?
        <div style={{"height":"550px"}} className='chats-popups'>
        <button onClick={handleCloses} className='x-button'>
          X
        </button>
        <div className="addInps">
          <input type="text" onChange={handleChange} name='job_title' value={addData.job_title} placeholder="Job Title"/>
          <input type="date" onChange={handleChange} name='start_date' value={addData.start_date} placeholder="Start Date "/>
          <input type="text" onChange={handleChange} name='company' value={addData.company} placeholder="Company"/>
          <input type="text" onChange={handleChange} name='skills_req' value={addData.skills_req} placeholder="Skills Required"/>
          <input type="text" onChange={handleChange} name='edu_req' value={addData.edu_req} placeholder="Education Required"/>
          <input type="text" onChange={handleChange} name='expr_req' value={addData.expr_req} placeholder="Experience Required"/>
          <input type="text" onChange={handleChange} name='salary_given' value={addData.salary_given} placeholder="Salary Given"/>
          <input type="text" onChange={handleChange} name='jobpost_status' value={addData.jobpost_status} placeholder="Job Status"/>
          <button onClick={handleAdd}>
              Insert
          </button>
        </div>
      </div>:isEditPressed?
              <div style={{"height":"600px"}}  className='chats-popups'>
              <button onClick={handleCloses} className='x-button'>
                X
              </button>
              <div className="addInps">
                <input type="text" onChange={handleID} name="id"  placeholder='Event ID'/>
                <input type="text" onChange={handleChange} name='job_title' value={addData.job_title} placeholder="Job Title"/>
                <input type="date" onChange={handleChange} name='start_date' value={addData.start_date} placeholder="Start Date"/>
                <input type="text" onChange={handleChange} name='company' value={addData.company} placeholder="Company"/>
                <input type="text" onChange={handleChange} name='skills_req' value={addData.skills_req} placeholder="Skills Required"/>
                <input type="text" onChange={handleChange} name='edu_req' value={addData.edu_req} placeholder="Education Required"/>
                <input type="text" onChange={handleChange} name='expr_req' value={addData.expr_req} placeholder="Experience Required"/>
                <input type="text" onChange={handleChange} name='salary_given' value={addData.salary_given} placeholder="Salary Given"/>
                <input type="text" onChange={handleChange} name='jobpost_status' value={addData.jobpost_status} placeholder="Job Status"/>
                
                <button onClick={handleEdit}>
                    Update
                </button>
              </div>
            </div>:isDeletePressed?
               <div className='chats-popups'>
               <button onClick={handleCloses} className='x-button'>
                 X
               </button>
               <div className="addInps">
             
               <input type="text" onChange={handleID} name="id"  placeholder='Event ID'/>
             
                 <button onClick={handleDelete}>
                     Delete
                 </button>
               </div>
             </div>:
        <div style={{"background":"#18180c","width":"400px","height":"159px","borderRadius":"10px"}} className="event-modify-container">
            <div style={{"marginTop":"10px"}}
              className="admin-event-header">
                <h1>
                    Modify Jobs
                </h1>
            </div>
            <div style={{"marginTop":"20px"}}>
            <button 
            onClick={()=>{
                setIsAddPressed(true)
                setIsEditPressed(false)
                setIsDeletePressed(false)
                }} 
                className='event-modify'>Add Job</button>
            <button 
                onClick={()=>{
                    setIsEditPressed(true)
                    setIsAddPressed(false)
                    setIsDeletePressed(false)
                }} 
                className='event-modify'>Edit Job </button>
            <button 
                onClick={()=>{
                    setIsDeletePressed(true)
                    setIsEditPressed(false)
                    setIsAddPressed(false)
                }} 
                className='event-modify'>Delete Job</button>
                </div>
        </div>}
       
        
        </div>}
          <div className="alumni-list-container">
          <div>
            <h1 className='home-h1'>
              List of Alumis
            </h1>
          </div>
        <div className='alumni-list'>
          
            {alumniData.map(alumni=>(
              <div className="alumnicard">
                <h3>
                  Unique Id:{alumni.id}
                </h3>
                <h3>
                 Name: {alumni.name}
                </h3>
                <h3>
                  Gender:{alumni.gender}
                </h3>
                <h3>
                  Passout Year:{alumni.passoutYear}
                </h3>
                <h3>
                  Company:{alumni.company}
                </h3>
              </div>
            ))}
        </div>
        </div>
        <footer className='alumni-footer'>
              <h4 className='yearselecter'>
                <span onClick={yrDecrease}> &lt;&lt; </span>
                &nbsp;{selectYear}&nbsp; 
                <span onClick={yrIncrease}> &gt;&gt; </span>
              </h4>
        </footer>
    </div>
  )
}

export default Alumni