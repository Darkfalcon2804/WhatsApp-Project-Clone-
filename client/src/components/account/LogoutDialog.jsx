import React from 'react'
import LoginDialog from './LoginDialog'
import {AppBar,Toolbar,styled,Box} from '@mui/material';

const Component=styled(Box)`
 height:100vh;
 background-color:#DCDCDCDCDC;
`
const LoginHeader=styled(AppBar)`
 height:220px;
   background-color:  #00A884;
   box-shadow:none;
`;
const LogoutDialog = () => {
  return (
 <>  
     <Component>  
        <LoginHeader>
            <Toolbar>

            </Toolbar>

        </LoginHeader>
        <LoginDialog/>
     </Component>
        </>
  )
}

export default LogoutDialog