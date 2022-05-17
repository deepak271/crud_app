const mongo = require('mongoose');

const connectDB = async()=>{
    try {
        const cont = await mongo.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
    
        })
        console.log(`mongodb connected:${cont.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB;