import {useContext, useState,useEffect} from 'react'
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';
import Footer from './Footer';
import { getMessages, newMessage } from '../../../service/api';
import conversation from '../../../../../server/model/Conversation.js';
import Message from './Message.jsx';

const Wrapper=styled(Box)`
 background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
 background-size:50%;
`;
const Component=styled(Box)`
height:80vh;
overflow-y:scroll;
`;
const Container=styled(Box)`
padding:1px 60px;
`;


const Messages = ({person ,conversation}) => {
    const {account}=useContext(AccountContext);
      const [value,setValue]=useState('');
    const [messages,setMessages]=useState([]);
    const [newMessageFlag,setNewMessageFlag]=useState(false);

      useEffect(()=>{
  const getMessageDetails=async()=>{
    let data=await getMessages(conversation._id);
    setMessages(data);
  }
  conversation._id && getMessageDetails();
      },[person._id,conversation._id,newMessageFlag])


const sendText= async(e)=>{
  // console.log(e);
  const code=e.keyCode || e.which;
  if(code===13){
    let message={
      senderId: account.sub,
      receiverId: person.sub,
      conversationId:conversation._id,
      type:'text',
      text:value
    }
    console.log(message);
   await   newMessage(message);
   setValue('');
   setNewMessageFlag(prev=>!prev);
  }

}
  return (
    <Wrapper>
          <Component>
    {
      messages && messages.map(message=>(
      <Container>
        <Message key={message._id} message={message}/>
        </Container>
      ))
    }
          </Component>
          <Footer
            sendText={sendText}
            setValue={setValue}
            />
    </Wrapper>
  )
}

export default Messages