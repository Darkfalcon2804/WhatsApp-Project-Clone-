import React, { useContext,useState } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import{Chat as MessageIcon} from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../Drawer/InfoDrawer';




const Component=styled(Box)`
height:65px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center;
`;
const Image=styled('img')({
    height:40,
    width:40,
    borderRadius:'50%'

});
const Wrapper=styled(Box)`
margin-left:auto;
& > *{
margin-left:2px;
padding:8px;
color:#000; 
};
& > :first-child,
  & > :nth-child(2) {
    font-size:45px;
    margin-right:10px;
    margin-top: 3px;

  }
`;

const Header = () => {
  const [openDrawer,setOpenDrawer]=useState(false);
    const {account}=useContext(AccountContext);
    const toggleDrawer=()=>{
      setOpenDrawer(true);
    }
  return (
    <div>
        <Component>
            <Image src={account.picture} alt="dp" onClick={()=>toggleDrawer()} />
            <Wrapper>
            <MessageIcon/>
            <HeaderMenu setOpenDrawer={setOpenDrawer}/>
            </Wrapper>
        </Component>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </div>
  )
}

export default Header