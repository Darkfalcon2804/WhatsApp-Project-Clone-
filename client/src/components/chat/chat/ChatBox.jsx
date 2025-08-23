import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { useContext,useEffect, useState } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { getConversation } from '../../../service/api';


const ChatBox = () => {
  const {person,account}=useContext(AccountContext);
  const [conversation,setConversation]=useState({});
  useEffect(()=>{
      const getConversationDetails=async()=>{
  let conversationData= await getConversation({senderId: account.sub , receiverId: person.sub});
  // console.log("Conversation data from backend:", conversationData);
  setConversation(conversationData);
      }
       getConversationDetails();
    },[person.sub]);
    // console.log("Conversation ID:", conversation?._id);
  return (
   <Box  style={{heigt:'75%'}}>
    <ChatHeader person={person}/>
    <Messages   person={person}  conversation={conversation}/>
   </Box>
  )
}

export default ChatBox