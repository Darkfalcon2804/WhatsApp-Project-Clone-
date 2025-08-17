import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection= async ()=>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-ewiaezn-shard-00-00.81adi2b.mongodb.net:27017,ac-ewiaezn-shard-00-01.81adi2b.mongodb.net:27017,ac-ewiaezn-shard-00-02.81adi2b.mongodb.net:27017/?ssl=true&replicaSet=atlas-f9iqkh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=DarkCluster28`
    try{
     await mongoose.connect(URL);
     console.log("Databse Connected successfully");
    }
    catch(error){
        console.log("Error while connecting with the database ",error.message);
    }
}

export default Connection;