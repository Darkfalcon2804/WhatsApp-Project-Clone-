import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { getConversation } from '../../../service/api';


const ChatBox = () => {
  const {person,account}=useContext(AccountContext);
  useEffect(()=>{
      const getConversationDetails=async()=>{
  let data=  await getConversation({senderId: account.sub , receiverId: person.sub});
      }
       getConversationDetails();
    },[person.sub]);
  return (
   <Box  style={{heiht:'75%'}}>
    <ChatHeader person={person}/>
    <Messages   person={person}/>
   </Box>
  )
}

export default ChatBox