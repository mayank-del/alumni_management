
/*
import React, { useContext,createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const socket = io('http://localhost:5000');
export const contextData=createContext()


function UserContext({children}) {
    const myVideo = useRef();
    const[notification,setNotification]=useState(0)

    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [stream, setStream] = useState();
    const [name, setName] = useState('');
    const [call, setCall] = useState({});
    const [me, setMe] = useState('');
  
    const userVideo = useRef();
    const connectionRef = useRef();
  
    useEffect(() => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((currentStream) => {

            setStream(currentStream)
          setTimeout(()=>{
              myVideo.current.srcObject = currentStream;

          },400)
                  
        })
  
      socket.on('me', (id) => setMe(id));
  
      socket.on('callUser', ({ from, name: callerName, signal }) => {
        setCall({ isReceivingCall: true, from, name: callerName, signal });
      });
    }, [myVideo]);
  
    const answerCall = () => {
      setCallAccepted(true);
  
      const peer = new Peer({ initiator: false, trickle: false, stream });
  
      peer.on('signal', (data) => {
        socket.emit('answerCall', { signal: data, to: call.from });
      });
  
      peer.on('stream', (currentStream) => {
        userVideo.current.srcObject = currentStream;
      });
  
      peer.signal(call.signal);
  
      connectionRef.current = peer;
    };
  
    const callUser = (id) => {
      const peer = new Peer({ initiator: true, trickle: false, stream });
  
      peer.on('signal', (data) => {
        socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
      });
  
      peer.on('stream', (currentStream) => {
        userVideo.current.srcObject = currentStream;
      });
  
      socket.on('callAccepted', (signal) => {
        setCallAccepted(true);
  
        peer.signal(signal);
      });
  
      connectionRef.current = peer;
    };
  
    const leaveCall = () => {
      setCallEnded(true);
  
      connectionRef.current.destroy();
  
      window.location.reload();
    };

  return (
    <contextData.Provider value={{ notification,setNotification,call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall, }}>
        {children}
    </contextData.Provider>
    
  );
}

export default UserContext;

export const NotificationState=()=>{
  return useContext(contextData);
}
*/


import React, { createContext, useState, useRef, useEffect,useContext } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';


export const contextData = createContext();

const socket = io('http://localhost:5000');

const UserContext = ({ children }) => {

  const[notification,setNotification]=useState(0)
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');
  const [VideoOn,setVideoOn]=useState({
    video:false,
    audio:true
  });
  const[activeAdminCall,setActiveAdminCall]=useState(false);
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: VideoOn.video, audio: VideoOn.audio })
      .then((currentStream) => {
        setStream(currentStream);
        setTimeout(()=>{
        myVideo.current.srcObject = currentStream;

        },300)
      });

    socket.on('me', (id) => setMe(id));

    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, [VideoOn]);
/*   function VideoOn(){
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((currentStream) => {
      setStream(currentStream);
      setTimeout(()=>{
      myVideo.current.srcObject = currentStream;

      },300)
    });

  socket.on('me', (id) => setMe(id));

  socket.on('callUser', ({ from, name: callerName, signal }) => {
    setCall({ isReceivingCall: true, from, name: callerName, signal });
  });
  } */

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  return (

    <contextData.Provider value={{
      notification,setNotification,
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall,
      VideoOn,
      setVideoOn,
      activeAdminCall,
      setActiveAdminCall,
      socket
      
    }}
    >
      {children}
    </contextData.Provider>

  );
};

export default UserContext;

export const NotificationState=()=>{
  return useContext(contextData);
}

