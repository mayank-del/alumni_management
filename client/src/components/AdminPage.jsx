import React from 'react';
import {contextData} from "../Context/UserContext"
import {useEffect, useState , useContext} from 'react';
import "./AdminPage.css"
import axios from "axios"
import swal from "sweetalert";

import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './VideoCallComponents/VideoPlayer';
import Sidebar from './VideoCallComponents/Sidebar';
import Notifications from './VideoCallComponents/Notifications';

import { NotificationState } from '../Context/UserContext';


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '800px',
    background:'#28281a',
    color:"yellow",
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));


function AdminPage() {

    const classes =useStyles();
    
    const {activeAdminCall,setActiveAdminCall} = NotificationState();
    const {contextToken}=useContext(contextData)
    const [token,setToken]=useState("")
    const [requests,setRequests]=useState([])
    const [ID,setParamID]=useState(0)
    const adminToken=localStorage.getItem("token")


    useEffect(()=>{
        
        const url = 'http://localhost:5000/api/alumni/applicants';
        
    const {data} = axios.get(url,{
      headers:{
        "authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res=>{
        
        console.log(res.data)
        setRequests(res.data)
    })
    },[])
    function handleApprove(e){
        e.preventDefault();
        const {id}=e.target
        
        const url=`http://localhost:5000/api/alumni/approve-alumni/${id}`
        console.log(url)
        console.log(token)
        const {data} = axios.post(url,{},{
            headers:{
                "authorization": `Bearer ${localStorage.getItem("token")}`
              }
        }).then(res=>{
            swal("User Approved!", "User can login Now", "success");
        })
    }

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
            const url="http://localhost:5000/api/events/"
            const {data} = axios.post(url,addData,{
                headers:{
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                  }
            }).then(res=>{
                swal("Inserted", "Event inserted Successfully", "success");

            })
        }catch(e){
            console.log(e)
        }
    }
    async function handleEdit(){
        try{
            const url=`http://localhost:5000/api/events/${ID}`
            const {data} = axios.put(url,addData,{
                headers:{
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                  }
            }).then(res=>{
                swal("Updated", "Event Updated Successfully", "success");

            })
        }catch(e){

        }
    }
    async function handleDelete(){
        try{
            const url=`http://localhost:5000/api/events/${ID}`
            axios.delete(url, {
                headers: {
                  "authorization": `Bearer ${localStorage.getItem("token")}`
                },
                
              }).then(res=>{
                swal("Deleted", "Event deleted Successfully", "success");

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
    <div className='adminpage'>
       {adminToken?<div>

       
        {isAddPressed?
        <div className='chats-popups'>
        <button onClick={handleCloses} className='x-button'>
          X
        </button>
        <div className="addInps">
          <input type="text" onChange={handleChange} name='event_name' value={addData.event_name} placeholder="Event Name"/>
          <input type="date" onChange={handleChange} name='event_date' value={addData.event_date} placeholder="Event Date "/>
          <input type="text" onChange={handleChange} name='event_time' value={addData.event_time} placeholder="Event Time"/>
          <input type="text" onChange={handleChange} name='venue' value={addData.venue} placeholder="Venue"/>
          <input type="text" onChange={handleChange} name='event_desc' value={addData.event_desc} placeholder="Event description"/>
          <button onClick={handleAdd}>
              Insert
          </button>
        </div>
      </div>:isEditPressed?
              <div className='chats-popups'>
              <button onClick={handleCloses} className='x-button'>
                X
              </button>
              <div className="addInps">
                <input type="text" onChange={handleID} name="id"  placeholder='Event ID'/>
                <input type="text" onChange={handleChange} name='event_name' value={addData.event_name} placeholder="Event Name"/>
                <input type="date" onChange={handleChange} name='event_date' value={addData.event_date} placeholder="Event Date "/>
                <input type="text" onChange={handleChange} name='event_time' value={addData.event_time} placeholder="Event Time"/>
                <input type="text" onChange={handleChange} name='venue' value={addData.venue} placeholder="Venue"/>
                <input type="text" onChange={handleChange} name='event_desc' value={addData.event_desc} placeholder="Event description"/>
                
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
        <div 
            style={{"background":"#18180c","width":"400px","height":"159px","borderRadius":"10px","marginTop":"30px"}}
            className="event-modify-container">
            <div 
                style={{"marginTop":"10px"}}
                className="admin-event-header">
                <h1>
                    Modify Events
                </h1>
            </div>
            <div
            style={{"marginTop":"30px"}}
            >
            <button 
            onClick={()=>{
                setIsAddPressed(true)
                setIsEditPressed(false)
                setIsDeletePressed(false)
                }} 
                className='event-modify'>Add Event</button>
            <button 
                onClick={()=>{
                    setIsEditPressed(true)
                    setIsAddPressed(false)
                    setIsDeletePressed(false)
                }} 
                className='event-modify'>Edit Event </button>
            <button 
                onClick={()=>{
                    setIsDeletePressed(true)
                    setIsEditPressed(false)
                    setIsAddPressed(false)
                }} 
                className='event-modify'>Delete Event</button>
                </div>
        </div>}
        <div style={{"marginTop":"40px"}} className="approval">
            <div className="approval-header">
                <h1>
                    Approval Requests
                    
                </h1>
                <h4>{token}</h4>
            </div>
            <div  className="approval-requests">
                {requests.map(req=>(
                    <div style={{"marginTop":"30px"}} className="approve-card">
                    <h4>
                        Name:{req.name}
                    </h4>
                    <h4>
                        Unique Id:{req.id}
                    </h4>
                    <h4>
                        Email:{req.email}
                    </h4>
                    <button id={req.id} onClick={handleApprove} className='approve-button'>
                        Approve
                    </button>
                </div>
                ))}
                
            </div>
        </div>
         <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className='typo' variant="h2" align="center">Conference</Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div> 
        </div>:
        <div style={{"color":"whitesmoke"}}>
                <h1 >
                    Sorry,only admin can Access this page
                </h1>
            </div>}
    </div>
  )
}

export default AdminPage