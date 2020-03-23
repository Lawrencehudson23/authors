const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [
            true,
            'Please enter a title!'
        ]
    }
},{timestamps: true })


const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength: [
            3,
            "Name have to be at least 3 characters"
        ]
        
    },
    favoriteBooks:[BookSchema],
    // game1 :{
    //     type: String,
    //     default : 'unknown',
    // },
    // game2:{
    //     type: String,
    //     default : 'unknown'
    // },
    // game3:{
    //     type: String,
    //     default : 'unknown'
    // } 
},{ timestamps: true });

const Author = mongoose.model("Author",AuthorSchema);
module.exports = Author;