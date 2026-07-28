 import express from "express";
 import path from "path";
 import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const express=require("express");
// const path = require("path");
const app = express();
const PORT = 7000;
app.get("/",(req,res)=>{
    //res.send("Welcome to my website")
    // res.json({
    //     id:420,
    //     name:"akki",
    //     email:"akki11@gmail.com",
    //     course:"MERN STACK"
    // })
    // console.log(req.header);
    res.sendFile(path.join(__dirname,"public","index.html"))
});
app.get("/about",(req,res)=>{
      res.sendFile(path.join(__dirname,"public","about.html"))
});
app.get("/contact",(req,res)=>{
      res.sendFile(path.join(__dirname,"public","contact.html"))
});

app.listen(PORT,()=>{
    console.log("Server is running in port 7000")

});