import React from 'react'
import { useEffect,useState,useContext } from 'react';
import { getUsers } from '../../../service/api';
import {Dialog,Box,Typography,List,ListItem,styled,Divider} from '@mui/material';
import Converstion from './Converstion';
import { AccountContext } from '../../../context/AccountProvider';

const Component=styled(Box)`
height:81vh;
overflow:overlay;
`;
const StyedDivider=styled(Divider)`
margin:0 0 0 70px;
background:#e9edef;
opacity:.6;

`;

const Conversations = ({text}) => {
    const [user,setUsers]=useState([]);
    
    const {account}=useContext(AccountContext);
    useEffect(()=>{
        const fetchData=async ()=>{
         let response=  await getUsers();
         const  filteredData=response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
         setUsers(filteredData);
        }
        fetchData();
    },[text]);
  return (
  <Component>
    {
        user.map(user =>  (
            user.sub!==account.sub &&
            <>
            <Converstion user={user}/>    
            <StyedDivider/>
        </>
        ))
}
  </Component>
  )
}

export default Conversations;