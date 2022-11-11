
import { useState , createContext,useContext} from "react"
export const contextData=createContext()

function UserContext({children}) {
    const[notification,setNotification]=useState(0)

  return (
    <contextData.Provider value={{ notification,setNotification }}>
        {children}
    </contextData.Provider>
    
  );
}

export default UserContext;

export const NotificationState=()=>{
  return useContext(contextData);
}
