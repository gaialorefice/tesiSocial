const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        min:3,
        max:20,
        unique:true 
    },
    name:{
        type: String,
        required: true,
        min:3,
        max:20,
        
    },
    surname:{
        type: String,
        required: true,
        min:3,
        max:20,
    },
    email:{
        type: String,
        required: true,
        max:50,
        unique:true 
    },
    password:{
        type: String,
        required:true,
        min:8

    },
    profilePicture:{
        type: String,
        default:""
    },

    isAdmin:{
        type: Boolean,
        default: false
    },


    followings:{
        type: Array,
        default:[],
    },

    followers:{
        type: Array,
        default: [],
    }

},
    {timestamps: true}, 
);

module.exports = mongoose.model("User",UserSchema);