import {useEffect, useState} from 'react'
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import { InputBase } from '@mui/material';
import {EmojiEmotionsOutlined,AttachFile,Mic} from '@mui/icons-material';
import { uploadFile } from '../../../service/api';
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

const Footer = ({sendText , setValue,value,file,setFile,setImage}) => {

  useEffect(()=>{
   const getImage=async()=>{
    if(file){
      const data=new FormData();
      data.append("name",file.name);
      data.append("file",file);
      let res=await uploadFile(data);
      setImage(res.data);
    }
   }
   getImage();
  },[file])

  const onFileChange=(e)=>{
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  }
  return (
     <Container>
      <EmojiEmotionsOutlined/>
          <label htmlFor="fileInput">
        <ClipIcon/>
          </label>
        
              <input 
              type="file"
              id="fileInput"
              style={{display:'none'}}
              onChange={(e)=>onFileChange(e)}
              />
        <Search>
            < InputField
            placeholder='Type a message'
            onChange={(e)=>setValue(e.target.value)}
            onKeyDown={(e)=>sendText(e)}
            value={value}
            />
        </Search>
        <Mic/>


     </Container>
  )
}

export default Footer