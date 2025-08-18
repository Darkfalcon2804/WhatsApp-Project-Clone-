import React from 'react'
import {Dialog,Box,Typography,List,ListItem,styled,Divider} from '@mui/material';
import {emptyChatImage} from '../../../constants/data';

const Component=styled(Box)`
background:#f8f9fa;
padding:15px 0;  
text-align:center;
// height:803px;
width:1045px;
height:100vh;
display:flex;
  align-items:start;
  justify-content:center;
  // border:1px solid black
`;
const Container=styled(Box)`
padding:0 200px;
`;
const Image=styled('img')({
width:600,
marginTop:90
})
;
const Title=styled(Typography)`
font-size:35px;
margin:25px 0 10px 0;
font-family:inherit;
font-weight:300;
color:#41525d;
`;
const SubTitle=styled(Typography)`
font-size:14px;
color:#667781;
font-weight:400;
font-family:inherit;  
`;
const StyleDivider=styled(Divider)`
margin:40px 0;
opacity:6;
`;
const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="empty chat backrgound"   />
        <Title>
          WhatsApp Web
        </Title>
        <SubTitle>
          Now send and receive messages wihtout keeping your phone online.
        </SubTitle>
        <SubTitle>
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </SubTitle>
        <StyleDivider/>
      </Container>
    </Component>
  
  )
}

export default EmptyChat