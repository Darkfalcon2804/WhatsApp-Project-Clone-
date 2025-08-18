import { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Messenger from './components/Messenger'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider, { AccountContext } from './context/AccountProvider';
import LoginDialog from './components/account/LoginDialog';
import LogoutDialog from './components/account/LogoutDialog';

function App() {
  const [count, setCount] = useState(0);
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
      // console.log("Google Client ID:", import.meta.env.VITE_GOOGLE_CLIENT_ID);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <MainApp/>
      </AccountProvider>     
    </GoogleOAuthProvider>
  )  }
  function MainApp(){
    const {account}=useContext(AccountContext);
    return (
      <>
      {account?<Messenger/>:<LogoutDialog/>}
      </>
    )

}
export default App

