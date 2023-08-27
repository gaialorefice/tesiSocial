const router = require("express").Router();
const Follower = require("../models/Follower");
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Registrazione
router.post("/register", async (req,res) =>{
       

        try{
            //genera password criptate
            const salt = await bcrypt.genSalt(10);
            const cryptedPassword =  await bcrypt.hash(req.body.password, salt);
            //crea utente
            const newUser =  new User({
                username: req.body.username,
                email: req.body.email,
                password: cryptedPassword,
            });
            // salva utente
            const user = await newUser.save();
            const follow = await newFollowList.save();
            res.status(200).json(user);
            res.status(200).json(follow);
        } catch(err){
            res.status(500).json(err); //codice 500 internal server error
        }
       
});

//login

router.post("/login", async(req,res)=> {

    try{
        const user = await User.findOne({email:req.body.email});
        if(!user && res.status(404)){
            console.log("Utente non trovato");
        }
        const valPassword = await bcrypt.compare(req.body.password,user.password);
        if(!valPassword && res.status(400)){
            console.log("Password errata");
        }

        res.status(200).json(user);

    }catch(err) {
        res.status(500).json(err); //codice 500 internal server error
    }   
})

module.exports = router;