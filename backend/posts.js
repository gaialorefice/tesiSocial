const router = require("express").Router();
const Post = require("../models/Post");

//creare un post
router.post("/:id", (req,res)=>{
    const post = new Post({
        userId: req.params.id,
        img:""

    })
})

//aggiornare un post
//cancellare un post
//like un post

module.exports = router;