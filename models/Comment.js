const mongoose = require("mongoose");

const CommSchema = new mongoose.Schema({

    userId: {
        type: String,
        // required: true,
    },
    username:{
        type: String,
    },
    postId:{
        type: String,
       
    },
    text:{
        type: String,
    },

},
    {timestamps: true}, 
);

module.exports = mongoose.model("Comment",CommSchema);