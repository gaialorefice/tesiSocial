const Follower = require("../models/Follower");
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
router.get("/:id",async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        
        const{password, ...other} = user._doc;
        res.status(200).json(other);
    } catch (error) {
        return res.status(500).json(error);
    }

})
//follower
router.put("/:id/follow", async (req, res)=>{
    if(req.body.userId != req.params.id){
        try{
            const user =  await User.findById(req.params.id); //account da seguire
            const currentUser = await User.findById(req.params.userId); //account che segue 
            const f = await Follower.find(req.params.id);
            
            if(!f.follower.includes(req.params.userId)){
                await f.up
            }
           
        }catch(error){
            res.status(500).json(error)
        }
    }else{
        res.status(403).json("Non puoi seguirti da solo")
    }
})

//following 

module.exports = router;