const path=require('path');
const express=require('express');
const app=express();
const port=3000;
// console.log(__dirname);
// const stringPath=path.join(__dirname,"../public");
app.set('view engine', 'hbs');
app.get("",(req,res)=>{
res.render("index",{
    channelName:"Anuj",
});
})
// app.use(express.static(stringPath));
app.get("/",(req,res)=>{
    res.send("Welcome to Home Page");
})
app.get("/about",(req,res)=>{
    res.write("<h1>Welcome to the about Page</h1>");
    res.write("<h1>Welcome to the about Page</h1>");
    res.write("<h1>Welcome to the about Page</h1>");
    res.send();
})
app.get("/temp",(req,res)=>{
    res.status(200).send([{
        id:1,
        name:"Anuj",

    },
    {
        id:1,
        name:"Anuj",
    },
    {
        id:1,
        name:"Anuj",
    },
    {
        id:1,
        name:"Anuj",
    }
]);
})
app.get("/anuj",(req,res)=>{
    res.json([
        {
        
            id:1,
            name:"Anuj",
    
        },
        {
            id:1,
            name:"Anuj",
        },
        {
            id:1,
            name:"Anuj",
        },
        {
            id:1,
            name:"Anuj",
        }
    
        
     ] );
});
app.listen(port,()=>{
    console.log(`Listiung at the port ${port}`);
})