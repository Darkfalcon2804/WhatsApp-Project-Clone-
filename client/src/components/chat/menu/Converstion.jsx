import React, { useContext,useEffect ,useState} from 'react'
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';
import { setConversation , getConversation} from '../../../service/api';
import { formatDate } from '../../../utils/common-utils';

const Container=styled(Box)`
display:flex;
`;
const Timestamp=styled(Typography)`
font-size:12px;
margin-left:auto;
color:#00000099;
margin-right:20px;
`;
const Text=styled(Typography)`
font-size:14px;
color:rgba(0,0,0,0.6);
`;
const Component=styled(Box)`
display:flex;
align-items:center;
height:45px;
width:100%;
padding:30px 0;
margin-top:15px;
cursor:pointer;
`;
// const Image=styled('img')({
//     width:65,
//     height:35,
//     borderRadius:'50%',
//     padding:'0 14px',
//     paddingLeft:'15px', 
//     objectFit:'cover'
// });
const Image = styled('img')({
  width: 45,
  height: 45,
  borderRadius: '50%',
  marginRight: '14px',
  objectFit: 'cover',
});


const Converstion = ({user}) => {
  const {setPerson ,account,  newMessageFlag}=useContext(AccountContext);
 const[message,setMessage]=useState({});
  useEffect(()=>{
    const getConversationDetails=async()=>{
     const data= await getConversation({senderId:account.sub,receiverId:user.sub});
      setMessage({ text: data?.message , timestamp: data?.updatedAt })
    }
    getConversationDetails();
  },[  newMessageFlag])

  const getUser= async()=>{
    setPerson(user);
    await setConversation({senderId:account.sub,receiverId:user.sub})
  }
  // console.log(user);
  console.log(user.picture);
  return (
    <Component onClick={()=> getUser()}>
        <Box>
          
        <Image src={user.picture} alt="dp" />
       

        {/* <Image 
  src={user.picture?.trim()} 
  alt={user.name || "dp"} 
  onError={(e) => {
    console.error("Image failed to load:", user.picture);
    e.target.src = "/default-dp.png"; // put a default image in public/
  }} 
/> */}

        </Box>
        <Box style={{width:'100%'}}>
        <Container>
                <Typography>{user.name}</Typography>
                {
                  message?.text &&
                  <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
                }
        </Container>
        <Box>
          <Text>
            {message?.text?.includes('localhost')?'media':message.text}
          </Text>
        </Box>
        </Box>
    </Component>
  )
}

export default Converstion