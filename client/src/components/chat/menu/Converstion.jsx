import React, { useContext } from 'react'
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';

const Component=styled(Box)`
display:flex;
align-items:center;
height:45px;
width:100%;
padding:30px 0;
margin-top:15px;
cursor:pointer;
`;
const Image=styled(`img`)({
    width:65,
    height:35,
    borderRadius:'50%',
    padding:'0 14px',
    paddingLeft:'15px', 
    objectFit:'cover'
});

const Converstion = ({user}) => {
  const {setPerson}=useContext(AccountContext);
  const getUser=()=>{
    setPerson(user);
  }
  return (
    <Component onClick={()=> getUser()}>
        <Box>
        <Image src={user.picture} alt="dp" />
        </Box>
        <Box>
                <Typography>{user.name}</Typography>
        </Box>
    </Component>
  )
}

export default Converstion