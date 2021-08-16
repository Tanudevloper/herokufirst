var mongoose = require('mongoose');

var postsSchema = new mongoose.Schema(
    {
     userId:{
         type: Number,
         unique:true,
         required:true,
         trim:true
     },
     id:{
        type: Number,
        required:true 
     },
     title:
     {
         type:String,
         require:true
     },
     body:
     {
         type:String,
         require:true
     }
    },{timestamps:true});
    module.exports = mongoose.model("Albums", postsSchema);