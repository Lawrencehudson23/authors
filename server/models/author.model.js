const mongoose = require("mongoose");
const AuthorSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength: [
            3,
            "Name have to be at least 3 characters"
        ]
        
    }
},{ timestamps:true });

module.exports = mongoose.model("Author",AuthorSchema);
 


