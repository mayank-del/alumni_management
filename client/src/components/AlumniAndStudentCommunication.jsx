import React,{useState} from 'react';
import io from "socket.io-client";
import AlumniChat from './AlumniChat';
import "./AlumniChat.css"

const socket=io.connect("http://localhost:5000");

export default function AlumniAndStudentCommunication() {

  const alumniToken=localStorage.getItem("alumniToken")
  const name=localStorage.getItem("name")
  const id=localStorage.getItem("id")

    const [userName, setUserName] = useState(alumniToken?name:"");
    const [room, setRoom] = useState(alumniToken?`Room${id}`:"");
    const [showChat, setShowChat] = useState(false);
  
    const joinRoom = () => {
      console.log(room)
      console.log(userName)
      if (userName !== "" && room !== "") {
        socket.emit("join_room", room);
        setShowChat(true);
      }
    };

  return (
    <div className='chat-main'>
        {!showChat?
        (<div className="joinChatContainer">

        <h3>
            {alumniToken?"Join Query Room":"Ask your Doubt"}
        </h3>
        {alumniToken?
        <input type="text"
        name=''
        value={name}
        disabled
        />:

        <input type="text"
         placeholder='Enter Your Name'
         onChange={(e)=>{setUserName(e.target.value)}}/>
         
         }
        {alumniToken?
        <input type="text"
         name=''
         disabled
         value={`Room${id}`}
         

        />:
        <input type="text"
         placeholder='Room ID....'
         onChange={(e)=>{setRoom(e.target.value)}}
        />}
        <button onClick={joinRoom}>
            {alumniToken?"Join":"Join A Room"}
        </button>
    </div>):

       ( <AlumniChat socket={socket} username={userName} room={room}/>)}
    </div>
  )
}
