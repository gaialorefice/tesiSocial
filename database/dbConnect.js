const mongoose =  require("mongoose");
const dotenv = require("dotenv");

async function dbConnect(){
    mongoose.connect(
        process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true}
    ).then(()=> {
        console.log("Connesso a MongoDB");
    }).catch((error)=>{
        console.log("Database non connesso");
        console.log(error);
    });
}
module.exports = dbConnect;