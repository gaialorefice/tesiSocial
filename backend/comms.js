//commenti

const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const Comm = require("../models/Comment");
const Comment = require("../models/Comment");


// POST: Crea un nuovo commento in un post
router.post('/posts/:postId/comments', async (req, res) => {
    try {
      const post = await Post.findById(req.params.postId);
      if (!post) {
        
        return res.status(404).json({ message: 'Post non trovato' });
      }
  
      const newComment = new Comment(req.body)
  
      const savedComment = await newComment.save();
      await post.updateOne({$push:{comments:savedComment}})
      await post.save();
  
      return res.status(200).json(newComment);
    } catch (error) {
      return res.status(500).json({ error: 'Errore nella creazione del commento' });
    }
  });
  

// GET: Ottieni i commenti di un post
// router.get('/posts/:postId/comments', (req, res) => {
//   Post.findById(req.params.postId)
//     .populate('comments')
//     .exec((err, post) => {
//       if (err || !post) {
//         return res.status(404).json({ message: 'Post non trovato' });
//       }

//       return res.status(200).json(post.comments);
//     });
// });


//GET commenti in un post
router.get('/posts/:postId/comments', async (req, res) => {
    try {
        const post = await Post.findById(req.params.userId);
        const comments = Promise.all(
        post.comments.map(comId =>{
            return Comment.findById(comId)
        })
    )
    let commentsList = [];
    (await comments).map((com) =>{
        const {_id, userId, comm} = com;
        followersList.push({_id,userId,comm});
    })
    return res.status(200).json(commentsList);

    } catch (error) {
        return res.status(500).json(error);
    }
  });

// PUT: Aggiorna un commento
router.put('/posts/:postId/comments/:commentId', requireAuth, requireCommentOwnership, async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.commentId, { text: req.body.text }, { new: true });

    if (!updatedComment) {
      return res.status(404).json({ message: 'Commento non trovato' });
    }

    return res.status(200).json(updatedComment);
  } catch (err) {
    return res.status(500).json({ error: 'Errore nell\'aggiornamento del commento' });
  }
});

// DELETE: Elimina un commento
router.delete('/posts/:postId/comments/:commentId', requireAuth, requireCommentOwnership, async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndRemove(req.params.commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: 'Commento non trovato' });
    }

    const post = await Post.findById(req.params.postId);
    post.comments.pull(req.params.commentId);
    await post.save();

    return res.status(200).json({ message: 'Commento eliminato con successo' });
  } catch (err) {
    return res.status(500).json({ error: 'Errore nell\'eliminazione del commento' });
  }
});

module.exports = router;
