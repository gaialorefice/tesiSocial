

const express = require("express");

const app = express();
const mongoose =  require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const db = require("./database/dbConnect");

const userAuth = require ("./backend/auth");
const userAction = require("./backend/users");
const postHandler = require("./backend/posts");

dotenv.config();


console.log(db());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));




var cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',  // L'URL del tuo frontend React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Abilita il supporto ai cookie o alle credenziali
  };
  
app.use(cors(corsOptions));




app.use("/api/auth",userAuth);
app.use("/api/users",userAction);
app.use("/api/posts", postHandler);


app.listen(8800,()=>{
    console.log("Back-end server attivo");
});