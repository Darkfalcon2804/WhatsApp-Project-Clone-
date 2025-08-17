import {useContext} from 'react'
import {Drawer,Box, Typography,styled} from '@mui/material';
import { AccountContext } from '../../context/AccountProvider';

const ImageContainer=styled(Box)`
display:flex;
justify-content:center;
align-items:center; 
`;

const Image=styled('img')({
width:190,
height:250,
borderRadius:'50%',
padding:'40px 0'
});

const BoxWrapper=styled(Box)`
background:#fff;
padding:15px 30px 2px;
box-shadow:0 1px 3px rgba(0,0,0,0.08);
& :first-child{
font-size:13px;
color:#009688;
font-weight:200;
}
& :last-child{
margin:14px 0;
color:#4A4A4A;
}
`;
const DescriptonContainer=styled(Box)`
// border:1px solid black;
width:85%;
height:120px;
padding-left:15px;
margin-left:20px;
margin-top:20px;
margin-bottom:30px;
display:flex;
align-items:center;
justify-content:center;
& > p {
font-size:20px;
font-weight:500;
color:#8696a0;
}
`;


const Profile = () => {
    const {account}=useContext(AccountContext);
  return (
   <>
   <ImageContainer>
    <Image src={account.picture} alt="dp"/>
   </ImageContainer>
   <BoxWrapper>
    <Typography>
        Your name
    </Typography>
    <Typography>
        {account.name}
    </Typography>
   </BoxWrapper>
   <DescriptonContainer>
        <Typography>
            This is not username or pin.This name will be visible to your WhatsApp contacts.
        </Typography>
   </DescriptonContainer>
   <BoxWrapper>
        <Typography>
            About
        </Typography>
        <Typography>
            Eat! Sleep! Code! Repeat!
        </Typography>
   </BoxWrapper>
   </>
  )
}

export default Profile