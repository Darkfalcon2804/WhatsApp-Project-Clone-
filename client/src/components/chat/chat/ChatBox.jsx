import React from 'react'
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
const ChatBox = () => {
  return (
   <Box>
    <ChatHeader/>
    <Messages/>
   </Box>
  )
}

export default ChatBox