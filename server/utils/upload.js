import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;


const storage= new GridFsStorage({
    url:`mongodb://${USERNAME}:${PASSWORD}@ac-ewiaezn-shard-00-00.81adi2b.mongodb.net:27017,ac-ewiaezn-shard-00-01.81adi2b.mongodb.net:27017,ac-ewiaezn-shard-00-02.81adi2b.mongodb.net:27017/?ssl=true&replicaSet=atlas-f9iqkh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=DarkCluster28`,
   // url:`mongodb+srv://${USERNAME}:${PASSWORD}@ac-ewiaezn-shard-00-00.81adi2b.mongodb.net/?ssl=true&replicaSet=atlas-f9iqkh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=DarkCluster28`,
    options: {useNewUrlParser:true,useUnifiedTopology: true },
   file:(req,file)=>{
     const match=["image/png","image/jpg"];
     if(match.indexOf(file.mimetype)===-1){
        return `${Date.now()}-file-${file.originalname}`;
     }
     return{
        bucketName:"fs",
        filename:`${Date.now()}-file-${file.originalname}`
     }
   }
});

export default multer({storage});