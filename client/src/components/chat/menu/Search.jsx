import React from 'react'
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import{Search as SearchIcon} from '@mui/icons-material';
import { InputBase } from '@mui/material';

const Component=styled(Box)`
background:#fff;
height:45px;
border-bottom:1px solid #f2f2f2;
display:flex;
align-items:center;
`;
const Wrapper=styled(Box)`
 background-color:#f0f2f5;
 position:relative;
 margin:0 20px;
 width:90%;
 
 border-radius:10px;
`;
const Icon=styled(Box)`
position:absolute;
height:70%;
padding-top:3px;
padding-left:10px;
color:#919191;
`;
const InputField=styled(InputBase)`
width:100%;
padding:16px;
padding-left:50px;
height:15px;
font-size:14px;
`;
const Search = () => {
  return (
   
      <Component>
        <Wrapper>
        <Icon>
          <SearchIcon
          fontSize='medium'/>
        </Icon>
        <InputField
        placeholder='Search or start new chat'
        />
        </Wrapper>
      </Component>
   
  )
}

export default Search ;