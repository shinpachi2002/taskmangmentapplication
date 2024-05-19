const express=require("express");
const dbconnect = require("./db/db");
const {createtask,updatetask} = require("./controllers/taskcontroller");
require("dotenv").config();
const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("server is working");
})
dbconnect();
app.post("/createtask",createtask);
app.put("/updatetask/:id",updatetask)
app.listen(5000,()=>{
    console.log("port is running on 5000")
}) 