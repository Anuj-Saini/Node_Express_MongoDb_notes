const path=require('path');
const express=require("express");
const app=express();
const hbs=require("hbs");
const templatePath=path.join(__dirname,"../template/views");
const PartialsPath=path.join(__dirname,"../template/partials");
app.set('view engine', 'hbs');
app.set('views',templatePath);
hbs.registerPartials(PartialsPath);
app.get("",(req,res)=>{
res.render("index",{
    channelName:"Anuj",
});
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("*",(req,res)=>{
    res.render("404",{
        errorComment:"opps page did not found",
    })
})
app.get("/",(req,res)=>{
    res.send("Hello world from the express");
});
app.get('/about',(req,res)=>{
    res.send("Hello welcome to the about page");
})
app.listen(8000,()=>{
    console.log("listing is started at the port 8000");
})