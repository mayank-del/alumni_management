import React,{useState} from 'react'
import { useEffect } from 'react';
import ScrollToBottom from "react-scroll-to-bottom";
import { BsBellFill } from 'react-icons/bs';
import soundurl from "../images/Notification.mp3";
import Sound from "react-sound";
import axios from 'axios';
import {NotificationState} from "../Context/UserContext"


export default function AlumniChat({socket,username,room}) {
  const [messageList, setMessageList] = useState([]);
  const {notification,setNotification}=NotificationState()

    useEffect(()=>{
        const data=axios.get(`http://localhost:5000/api/chats/${room}`).then((res)=>{
          setMessageList(res.data)
          console.log(res.data)
        })
    },[socket])
    const [currentMessage, setCurrentMessage] = useState("");
    const [isPlaying,setIsPlaying]=useState(false)
    const alumniToken=localStorage.getItem("alumniToken")
    const [count,setCount]=useState(0)

    const id=alumniToken? localStorage.getItem("id"):username;
   // var audio=new Audio('../images/Notification.mp3')

    const sendMessage = async () => {
      if (currentMessage !== "") {
        const messageData = {
          id:id,
          socketId:socket.id,
          room: room,
          author: username,
          message: currentMessage,
          time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        };
        
        await socket.emit("send_message", messageData);
        axios.post(`http://localhost:5000/api/chats/chat/`,messageData);
        setMessageList((list) => [...list, messageData]);
        setCurrentMessage("");
        setIsPlaying(false)

        
      }
    };
  
    useEffect(() => {
      const eventListener = async(data) => {
          await setIsPlaying(true)
          await setNotification(notification + 1)
          await setMessageList((list) => [...list, data]);

      };

      socket.on("receive_message", eventListener)
      return () => socket.off("receive_message", eventListener);
    }, [socket,count,isPlaying]);
  
    return (
      <div className="chat-window">
        <div className="chat-header">
          <p>{alumniToken?"Live Chat":"Live chat with Alumni"}</p>
        
          <span className='notification-bell'><BsBellFill/>{notification}</span>
          <Sound
              url={soundurl}
              playStatus={
                isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
              }
              volume={25}
      // playFromPosition={000}
    />   
        </div>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {messageList.map((messageContent,index) => {
              return (
                <div
                    key={index}
                  className="message"
                  id={username === messageContent.author ? "you" : "other"}
                >
                  <div>
                    <div className="message-content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">
                      <p id="time">{messageContent.time}</p>
                      <p id="author">{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={currentMessage}
            placeholder="Type your text...."
            onChange={(event) => {
              setIsPlaying(false)
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button onClick={sendMessage}>&#9658;</button>
        </div>
      </div>
    );
  }


  /* 
  
  const prom1=new Promise((resolve,reject)=>{
            setTimeout(()=>{
              const eventListener = (data) => {
                setMessageList((list) => [...list, data]);
                resolve(socket.on("receive_message", eventListener))

              }
              return () => socket.off("receive_message", eventListener);

            },4000)
            
          });

          const messageDrop = (indexdata) => {
            return new Promise((resolve,reject)=>{
                setTimeout((indexdata)=>{
                resolve(setIsPlaying(true))
                
                  
                  },2000,indexdata,);

                })
              }

          prom1.then((res)=>{
            console.log(res);
            setCount(count+1)


            return messageDrop(res);
          }).then((kuchbhi)=>{
            console.log(kuchbhi)

        }).catch((err)=>{
            console.log(err)
          })
  
  */