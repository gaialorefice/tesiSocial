

const express = require("express");

const app = express();
const mongoose =  require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
// const userRoute = require ("./frontend/profile");
const db = require("./database/dbConnect");

const userAuth = require ("./backend/auth");
const userAction = require("./backend/users");
const postHandler = require("./backend/posts");

dotenv.config();

// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true},()=>{
//     console.log("Connesso a MongoDB");
// });

// async function dbConnect(){
//     mongoose.connect(
//         process.env.MONGO_URL,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true,}
//     ).then(()=> {
//         console.log("Connesso a MongoDB");
//     }).catch((error)=>{
//         console.log("Database non connesso");
//         console.log(error);
//     });
// }
// module.exports = dbConnect;

console.log(db());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// app.use("/api/profile", userRoute);
app.use("/api/auth",userAuth);
app.use("/api/users",userAction);
app.use("/api/posts", postHandler);

app.listen(8800,()=>{
    console.log("Back-end server attivo");
});