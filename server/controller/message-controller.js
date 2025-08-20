import message from "../model/Message.js"
import conversation from "../model/Conversation.js";
export const newMessage=async(req,res)=>{
const newMessage= new message(req.body);
    try{


await newMessage.save();
await conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text});
 res.status(200).json('Message has been sent successfully');
}
catch(error){
 res.status(500).json(error.message);
}
}