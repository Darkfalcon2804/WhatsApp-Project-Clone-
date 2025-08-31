import { createContext, useState,useRef,useEffect } from "react";
import {io} from 'socket.io-client'
export const AccountContext=createContext(null);



const AccountProvider = ({children}) => {
    const[account,setAccount]=useState();
    const [person ,setPerson]=useState({});
    const [activeUsers,setActiveUsers]=useState([]);
    const socket=useRef();
    useEffect(() => {
  socket.current = io("http://localhost:9000", {
    transports: ["websocket"],
  });
}, []);





  return (
   <AccountContext.Provider
     value={{
            account,
            setAccount,
            person,
            setPerson,
            socket,
            activeUsers,
            setActiveUsers
     }}
   >
    {children}
   </AccountContext.Provider>
  )
}

export default AccountProvider