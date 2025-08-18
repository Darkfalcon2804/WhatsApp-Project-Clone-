import React from 'react'
import { useEffect,useState } from 'react';
import { getUsers } from '../../../service/api';

const Conversations = () => {
    const [user,setUsers]=useState([]);
    useEffect(()=>{
        const fetchData=async ()=>{
         let response=  await getUsers();
         setUsers(response);
        }
        fetchData();
    },[]);
  return (
    <div>Conversations</div>
  )
}

export default Conversations;