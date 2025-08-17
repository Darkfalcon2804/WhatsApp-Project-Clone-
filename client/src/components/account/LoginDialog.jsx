import React from 'react'
import { useState } from 'react'
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import {addUser} from '../../service/api'
const Component=styled(Box)`
display:flex;
justify-content:space-evenly;
margin-top:40px;
`;
const Container=styled(Box)`
padding:45px 0 45px 45px;
`;
const QRCode=styled('img')({
    height:264,
    width:264,
    margin:'50px 0 0 50px'
});
const Title=styled(Typography)`
font-size:26px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px;
`;

const StyledList=styled(List)`
&>li{
padding:0;
margin-top:15px;
font-size:18px;
line-height:28px;
color:#4a4a4a;
}
`;
const dialogStyle={
    height:'95%',
    marginTop:'8%',
    border:'2.5px groove',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
};
const LoginDialog = () => {
    const {setAccount}=useContext(AccountContext);


    const onLoginSuccess= async (res)=>{
      const decoded= jwtDecode(res.credential);
      console.log(decoded);
        setAccount(decoded);
       await addUser(decoded);
    }
    const onLoginError=(res)=>{
     console.log("Login Failed",res);
    }
  return (
    <div>
          <Dialog  open={true}
//    PaperProps={{sx:dialogStyle}}
 slotProps={{
          paper: { sx: dialogStyle }}}
            hideBackdrop={true}
        
  >
        <Component>
         <Container>
                <Title>To use WhatsApp on your computer:</Title>
                <StyledList>
                    <ListItem>
                      1.Open WhatsApp on your phone
                    </ListItem>
                    <ListItem>2.Tap Menu or Settings and select Linked Devices</ListItem>
                    <ListItem>3.Point your phone to this screen to capture the code</ListItem>
                </StyledList>
        </Container>

        <Box style={{position:'relative'}}>
            <QRCode src={qrCodeImage} alt="Qr code" />
            <Box  style={{position:'absolute',top:'50%',transform:'translateX(30%)'}} >
                <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={onLoginError}
   
                />

            </Box>
        </Box>
        </Component>



  </Dialog>
    </div>
  )
}

export default LoginDialog