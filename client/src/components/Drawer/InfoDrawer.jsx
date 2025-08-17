import React from 'react'
import {Drawer,Box, Typography,styled} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile';


const Header=styled(Box)`
background:#008069;
height:107px;
color:#ffff;
display:flex;
& > svg {
 margin-top:auto;
padding-bottom:15px;
   padding-left:15px;
}

& > p{
 margin-top:auto;
padding:12px;
font-weight:300;
font-size:22px    
}
`;
const Component=styled(Box)`
background:#ededed;
height:90%;
`;

const drawerStyle={
    left:20,
    top:24,
    height:'94.8%',
    width:'23.4%',
    boxShadow:'none'
}
const InfoDrawer = ({open,setOpen}) => {
                                                                
    function handleClose(){
        setOpen(false);
    }

  return (
        <Drawer
        open={open}
        onClose={handleClose}
         slotProps={{
          paper: { sx: drawerStyle}}}
          style={{zIndex:1500}}
        >
            <Header>
            <ArrowBack  sx={{ fontSize:45}}   onClick={()=>setOpen(false)}/>
            <Typography>
                    Profile
               </Typography> 
           </Header>
            <Component>
              <Profile/>
            </Component>
            </Drawer>    
)
}

export default InfoDrawer