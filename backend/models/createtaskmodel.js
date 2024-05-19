const mongoose =require("mongoose");

const createdTaskSchema=new mongoose.Schema({
    "task":{
        type:String,
        required:true,
    },
    "startingdate":{
        type:Date,
        required:true,
    },
    "endingdate":{
        type:Date,
        required:true,
    },
    "type":{
        type:String,
        required:true,
    }

})

const createdTaskModel=mongoose.model("Task",createdTaskSchema);
module.exports=createdTaskModel;