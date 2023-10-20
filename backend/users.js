
const User = require("../models/User");
const bcrypt = require("bcrypt");
const router = require("express").Router();

// router.get("/", (req,res) =>{
//     res.send("Profilo");
// })
//Aggiornamenti utente
router.put("/:id", async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){ // per il controllo che sia l'utente stesso a volter eseguire l'azione
         if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password   =  await bcrypt.hash(req.body.password, salt);
            }catch(error){
                return res.status(500).json(err);
            }
         }
         try{
            const user = await User.findByIdAndUpdate(req.body.userId,{
                $set: req.body, //inserisce automaticamnete i dati nel body
            });
            res.status(200).json("Account Aggiornato");
         }catch(error){
            return res.status(500).json(err);
           
         }
    }else{
        return res.status(403).json("Non Puoi aggiornare questo profilo");
    }

})

//delete
router.delete("/:id", async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){ // per il controllo che sia l'utente stesso a volter eseguire l'azione
     
         try{
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account eliminato");
         }catch(error){
            return res.status(500).json(err);
           
         }
    }else{
        return res.status(403).json("Non Puoi eliminare questo profilo");
    }

})

// get a user
router.get("/",async(req,res)=>{
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId? await User.findById(userId) : await User.findOne({username: username});
        
        const{password, ...other} = user._doc;
        res.status(200).json(other);
    } catch (error) {
        return res.status(500).json(error);
    }

})
//follow
router.put("/:id/follow", async (req, res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user =  await User.findById(req.params.id); //account da seguire
            const currentUser = await User.findById(req.body.userId); //account che segue 
            
            if(!user.followers.includes(req.body.userId)){ //se current user non è presente in follower dell'utente
                await user.updateOne({$push:{followers: req.body.userId}}); //aggiunge il follower nella lista dell'utente
                await currentUser.updateOne({$push:{followings: req.params.id}}); // aggiumge il following nella lista dell'utente
                res.status(200).json("Account aggiunto");
            }else{
                res.status(403).json("Già segui questa persona")
            }
           
        }catch(error){
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("Non puoi seguirti da solo")
    }
})

//unfollow
router.put("/:id/unfollow", async (req, res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user =  await User.findById(req.params.id); //account da seguire
            const currentUser = await User.findById(req.body.userId); //account che segue 
            
            if(user.followers.includes(req.body.userId)){ //se current user è presente in follower dell'utente
                await user.updateOne({$pull:{followers: req.body.userId}}); //rimuove il follower nella lista dell'utente
                await currentUser.updateOne({$pull:{followings: req.params.id}}); // rimuove il following nella lista dell'utente
                res.status(200).json("Account rimosso");
            }else{
                res.status(403).json("Non segui persona")
            }
           
        }catch(error){
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("Non puoi seguirti da solo")
    }
})
module.exports = router;