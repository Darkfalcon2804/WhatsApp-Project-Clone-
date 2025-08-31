import {useContext} from 'react'
import { AccountContext } from '../../../context/AccountProvider';
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


const ChatHeader = ({person}) => {
   const{activeUsers}=useContext(AccountContext);


  return (
     < Header>
    <img src={person.picture} alt="dp" style={{width:'45px',borderRadius:'65px',height:'45px'}} />
     <Box>
        <Name>{person.name}</Name>
            <Status>{activeUsers?.find(user=>user.sub===person.sub)?'Online':'Offline'}</Status>
     </Box>
     <RightContanier>
      <Search/>
      <MoreVert/>
     </RightContanier>
     </ Header>
  )
}

export default ChatHeader