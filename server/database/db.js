import mongoose from "mongoose";

const Connection= async ()=>{
    const URL='mongodb://dark:7742@ac-ewiaezn-shard-00-00.81adi2b.mongodb.net:27017,ac-ewiaezn-shard-00-01.81adi2b.mongodb.net:27017,ac-ewiaezn-shard-00-02.81adi2b.mongodb.net:27017/?ssl=true&replicaSet=atlas-f9iqkh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=DarkCluster28'
    try{
     await mongoose.connect(URL);
     console.log("Databse Connected successfully");
    }
    catch(error){
        console.log("Error while connecting with the database ",error.message);
    }
}

export default Connection;