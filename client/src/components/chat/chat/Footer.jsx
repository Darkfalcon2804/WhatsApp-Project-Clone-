import {useEffect, useState} from 'react'
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import { InputBase } from '@mui/material';
import {EmojiEmotionsOutlined,AttachFile,Mic} from '@mui/icons-material';

const Container=styled(Box)`
height:60px;
background:#ededed;
display:flex;
width:100%;
align-items:center;
padding:0 15px;
& > *{
margin-top:0;
margin-right:5px;
margin-left:5px;
margin-bottom:9px;
color:#919191;
}
`;
const Search=styled(Box)`
background-color:#ffffff;
border-radius:10px;
width:calc(97% - 100px);
height:30px;
margin-bottom:14px;
`;
const InputField=styled(InputBase)`
width:100%;
padding:15px;
height:22px;
display:flex;
align-items:center;
`;
const ClipIcon=styled(AttachFile)`
transform:rotate(40deg);
`;

const Footer = ({sendText}) => {
  const [text,setText]=useState('');
  
  return (
     <Container>
      <EmojiEmotionsOutlined/>
        <ClipIcon/>
        <Search>
            < InputField
            placeholder='Type a message'
            onChange={(e)=>setText(e.target.value)}
            onKeyDown={(e)=>sendText(e)}
            />
        </Search>
        <Mic/>


     </Container>
  )
}

export default Footer