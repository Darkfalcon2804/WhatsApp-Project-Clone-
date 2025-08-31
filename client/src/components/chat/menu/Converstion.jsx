import React, { useContext } from 'react'
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';
import { setConversation } from '../../../service/api';
const Component=styled(Box)`
display:flex;
align-items:center;
height:45px;
width:100%;
padding:30px 0;
margin-top:15px;
cursor:pointer;
`;
const Image=styled('img')({
    width:65,
    height:35,
    borderRadius:'50%',
    padding:'0 14px',
    paddingLeft:'15px', 
    objectFit:'cover'
});

const Converstion = ({user}) => {
  const {setPerson ,account}=useContext(AccountContext);
  const getUser= async()=>{
    setPerson(user);
    await setConversation({senderId:account.sub,receiverId:user.sub})
  }
  // console.log(user);
  // console.log(user.picture);
  return (
    <Component onClick={()=> getUser()}>
        <Box>
          
        {/* <Image src={user.picture} alt="dp" /> */}
        <Image 
  src={user.picture?.trim()} 
  alt={user.name || "dp"} 
  onError={(e) => {
    console.error("Image failed to load:", user.picture);
    e.target.src = "/default-dp.png"; // put a default image in public/
  }} 
/>

        </Box>
        <Box>
                <Typography>{user.name}</Typography>
        </Box>
    </Component>
  )
}

export default Converstion