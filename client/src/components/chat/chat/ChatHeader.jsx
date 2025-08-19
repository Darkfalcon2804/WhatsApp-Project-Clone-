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
const Name=styled(Typography)`
      margin-left:15px !important;
`;
const Status=styled(Typography)`
   margin-left:15px !important;
   font-size:12px;
   color:rgb(0,0,0,0.6)
`;
const RightContanier=styled(Box)`
margin-left:auto;
& > svg{
padding:10px;
font-size:50px;
color:#000
}
`;


const ChatHeader = () => {
  return (
     < Header>
    <img src='./src/images/HD-wallpaper-money-heist-money-heist-mask-moneyheist-netflix-thumbnail.jpg' alt="dp" style={{width:'45px',borderRadius:'65px',height:'45px'}} />
     <Box>
        <Name>Name</Name>
            <Status>Online Status</Status>
     </Box>
     <RightContanier>
      <Search/>
      <MoreVert/>
     </RightContanier>
     </ Header>
  )
}

export default ChatHeader