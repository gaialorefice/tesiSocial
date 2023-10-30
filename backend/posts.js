const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");

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
});

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
});
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
});

//trovare un post

router.get("/:id", async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }

});

router.post("/search", async (req,res)=>{

        const query = req.body.post.vector;
      
        const results = await Post.aggregate([{ //
            "$search": {
                "index": "vector_search", // optional, defaults to "default"
                "knnBeta": {
                  "vector": query,
                  "path": "vector",
                  "k": 10, 
                }
              }

        }]);
        console.log(results);
        res.status(200).json(results)
        
});

//feed 
router.get("/feed/:userId", async(req,res)=>{
    console.log(req.params.userId);
    try {
        
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const followerPosts = await Promise.all(
            currentUser.followings.map((followingId) =>{
                return Post.find({userId: followingId});
            })
        );
        res.status(200).json(userPosts.concat(...followerPosts));
    } catch (error) {
        res.status(500).json(error);
       
    }
});

//tutti ipost di un utente
router.get("/profile/:username", async(req,res)=>{
   
    try {
        const user = await User.findOne({username:req.params.username})
       const posts = await Post.find({userId:user._id})
       res.status(200).json(posts)
       
    } catch (error) {
        res.status(500).json(error);
       
    }
});


//prova funzionamento funzione nuovo post

// POST: Crea un nuovo commento in un post
router.post('/:postId/comments', async (req, res) => {
    try {
      const post = await Post.findById(req.params.postId);
      if (!post) {
        
        return res.status(404).json({ message: 'Post non trovato' });
      }
  
      const newComment = new Comment(req.body)
  
      const savedComment = await newComment.save();
      await post.updateOne({$push:{comments:savedComment._id}})
      await post.save();
  
      return res.status(200).json(newComment);
    } catch (error) {
      return res.status(500).json({ error: 'Errore nella creazione del commento' });
    }
  });

//   GET commenti in un post
router.get('/:postId/comments', async (req, res) => {

        const post = await Post.findById(req.params.postId); 
        if (!post) {
        
            return res.status(404).json({ message: 'Post non trovato' });
          }
        const comment = Promise.all(
            post.comments.map(comId =>{
                return Comment.findById(comId)
        }))

    let commentsList = [];
    (await comment).map((com) =>{
        
        commentsList.push(com);
    })
    res.status(200).json(commentsList);

 
  });

  

module.exports = router;