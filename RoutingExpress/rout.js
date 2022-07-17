const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    console.log("Welcome to Home Page");
})
app.get("/about",(req,res)=>{
    console.log("Welcome to the about Page");
})
app.get("/temp",(req,res)=>{
    console.log("Welcome to temprature");
})
app.get("/anuj",(req,rep)=>{
    console.log("Welcome Anuj");
})
app.listen(8000,()=>{
    console.log("Listening at 8000 port");
})