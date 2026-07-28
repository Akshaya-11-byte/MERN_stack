//import express from "express";
const express = require("express");
const app = express();
const PORT = 7000;
app.get("/",(req,res)=>{
    //res.send("Welcome to my website")
    res.json({
        id:420,
        name:"akki",
        email:"akki11@gmail.com",
        course:"MERN STACK"
    })
    console.log(req.header);
});
app.listen(PORT,()=>{
    console.log("Server is running in port 7000")

});