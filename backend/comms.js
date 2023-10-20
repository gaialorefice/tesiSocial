//commenti

const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const Comm = require("../models/Comment")

router.post("/", async(req,res)=>{
    const newComm = new Comm(req.body)
    try{

        const savedPost = await newPost.save();
        res.status(200).json("post salvato");

    }catch(error){
        res.status(500).json(error)
    }
});