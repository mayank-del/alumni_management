import React from 'react'
import { useState , createContext} from "react"
export const contextData=createContext()

function UserContext({children}) {
    const [contextToken,setContextToken]=useState("");
    const [userContextToken,setUserContextToken]=useState("");

  return (
    <contextData.Provider value={{contextToken,setContextToken,userContextToken,setUserContextToken}}>
        {children}
    </contextData.Provider>
    
  );
}

export default UserContext