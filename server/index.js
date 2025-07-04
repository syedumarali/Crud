const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/Users");


const app = express();

app.use(cors());
app.use(express.json());
//require('dotenv').config(); 



mongoose.connect("mongodb+srv://crud:admin@cluster0.h0j0uib.mongodb.net/crud")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

  //mongodb+srv://crud:crud12345@cluster0.fxetcty.mongodb.net/crud?retryWrites=true&w=majority
//mongoose.connect("mongodb+srv://crud:crud12345@cluster0.fxetcty.mongodb.net");
//mongodb://127.0.0.1:27017/crud





app.get("/", (req,res)=>{
    userModel.find({})
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.get("/getUser/:id", (req,res) => {
    const id = req.params.id;
    userModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.put("/updateUser/:id",(req,res)=>{

    const id = req.params.id;
    userModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age})
        .then(users => res.json(users))
        .catch(err =>res.json(err))
    
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    userModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))     
    .catch(err=>res.json(err))     


})

app.post("/createUser", (req,res)=>{
    userModel.create(req.body).then(users=>res.json(users))
    .catch(err=>  res.json(err))
})







app.listen(3001, () => {
    console.log("server is running");
})