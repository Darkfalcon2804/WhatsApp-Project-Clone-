import React, { useContext, useState } from 'react'
import{MoreVert } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {styled} from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';


const MenuOption=styled(MenuItem)`
font-size:14px;
padding:15px 60px 5px 24px;
color:#4A4A4A;

`;
const HeaderMenu = ({setOpenDrawer}) => {
    const [open,setOpen]=useState(null);
    const {setAccount}=useContext(AccountContext);
    const handleClose=()=>{
        setOpen(null);
    }
    function handleClick(e){
     setOpen(e.currentTarget);
    }
    function handleLogout(){
       setAccount(null);
          //  window.location.reload();  ////the main problem with this is it is directly reloding the page which is logical in this project there is no react router dom used and no local storage is used it basically a single page application which always render Message.jsx and working accordingly that and instead of local storage I am using useContext 
              }
  return (
   <>
   <MoreVert onClick={handleClick}/>
    <Menu
        id="basic-menu"
        anchorEl={open}
        keepMounted
        getContentAnchorE1={null}   
        open={open}
        onClose={handleClose}
       anchorOrigin={{
        vertical:'bottom',
        horizontal:'center'
       }}
       transformOrigin={{
        vertical:'top',
        horizontal:'right'
       }}
      >
        <MenuOption onClick={()=>{handleClose(); setOpenDrawer(true);}}>Profile</MenuOption>
        <MenuOption onClick={()=>{handleClose();handleLogout(); }}>Logout</MenuOption>
      </Menu>
   </>
  )
}

export default HeaderMenu;