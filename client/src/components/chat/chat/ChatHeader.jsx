import React from 'react'
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import {Search,MoreVert} from '@mui/icons-material';
import { defaultProfilePicture } from '../../../constants/data';
const  Header=styled(Box)`
height:65px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center;
`;



const ChatHeader = () => {
  return (
     < Header>
    <img src={defaultProfilePicture} alt="dp"  />
     <Box>
        <Typography>Name</Typography>
            <Typography>Online Status</Typography>
     </Box>
     <Box>
      <Search/>
      <MoreVert/>
     </Box>
     </ Header>
  )
}

export default ChatHeader