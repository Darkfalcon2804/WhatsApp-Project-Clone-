import React from 'react'
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';

const Component=styled(Box)`
display:flex;
align-items:center;
height:45px;
width:100%;
padding:40px 0;
margin-top:15px;
cursor:pointer;
`;
const Image=styled(`img`)({
    width:75,
    height:55,
    borderRadius:'50%',
    padding:'0 14px',
    objectFit:'cover'
});

const Converstion = ({user}) => {
  return (
    <Component>
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