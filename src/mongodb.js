const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/LoginSignup")
.then(()=>{
    console.log("mongodb connected");

})
.catch(()=>{
    console.log("failed to connect mongodb");
})




// create schema
const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
})

// create database collection
const collection = new mongoose.model("Collection1", LogInSchema)

module.exports=collection
