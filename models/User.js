const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        min:3,
        max:20,
        unique:true 
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

    bio:{
        type: String,
        max: 50
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