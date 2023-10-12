const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//creare un post
router.post("/", async(req,res)=>{
    const newPost = new Post(req.body)
    try{

        const savedPost = await newPost.save();
        res.status(200).json("post salvato");

    }catch(error){
        res.status(500).json(error)
    }
});

// router.get("/", async(req,res)=>{
//     try {
//         const dati = req.data;
//         console.log('dati ricevuti', dati)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// });

//aggiornare un post
router.put("/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("Post aggiornato");
        }else{
            res.status(403).json("Puoi aggiornare solo i tuoi post");
        }
    }catch(error){
        res.status(500).json(error)
    }
})

//cancellare un post
router.delete("/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Post eliminato");
        }else{
            res.status(403).json("Puoi eliminare solo i tuoi post");
        }
    }catch(error){
        res.status(500).json(error)
    }
})
//mettere e rimuovere like ad un post
router.put("/:id/like", async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("like aggiunto");
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("like rimosso");
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

//trovare un post

router.get("/:id", async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }

})

//feed 
router.get("/feed/all", async(req,res)=>{
   
    try {
        
        const currentUser = await User.findById(req.body.userId);
        
        const userPosts = await Post.find({userId: currentUser._id});
        const followerPosts = await Promise.all(
            currentUser.followings.map((followingId) =>{
                return Post.find({userId: followingId});
            })
        );
        res.json(userPosts.concat(...followerPosts));
    } catch (error) {
        res.status(500).json(error);
       
    }
})

module.exports = router;