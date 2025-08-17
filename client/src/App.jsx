import { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Messenger from './components/Messenger'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider, { AccountContext } from './context/AccountProvider';
import LoginDialog from './components/account/LoginDialog';
import LogoutDialog from './components/account/LogoutDialog';

function App() {
  const [count, setCount] = useState(0)
      const clientId='487340431015-2uuflavjp2agrkf2jiruu5o3114e9a3b.apps.googleusercontent.com';
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

