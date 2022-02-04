import mongoose from 'mongoose';
const Connection= async()=>{
    try{
    const url="mongodb://AkshayKanse:akshaykanse@blogweb-shard-00-00.c4a57.mongodb.net:27017,blogweb-shard-00-01.c4a57.mongodb.net:27017,blogweb-shard-00-02.c4a57.mongodb.net:27017/MYPROJECT?ssl=true&replicaSet=atlas-10e3cq-shard-0&authSource=admin&retryWrites=true&w=majority"
    await mongoose.connect(url,{ useNewUrlParser:true,useUnifiedTopology:true}) 
    //useNewUrlParser-for new url because current url is deprecated
    //useUnifiedTopology-for new discovery & monitoring engine
    console.log("Database Connected Successfully")
    }catch(error)
    {
console.log("Error in Conneting to Database",error);
    }
}
export default Connection