const fs = require('fs');
const http=require('http');
const { type } = require('os');
const url=require('url');
const server=http.createServer((req,res)=>{
    // console.log(res.url);
    if(req.url=="/")
{res.end("Hello From the other side 8000 prr Anuj Saini");}
else if(req.url=="/about"){
    res.end("Hello about page")
}
else if(req.url=="/contact"){
    res.end("Hello contact page")
}
else if(req.url=="/userapi"){
 fs.readFile("UserAPI\userapi.json","utf-8",(err,data)=>{
    console.log(data);
    req.end(data);
 })
}
else{
    res.writeHead(404,{"content-type": "text/html"});
    res.end("<h1>error 404 server not found</h1>");
}

});
server.listen(8000,"127.0.0.1",(()=>{
    console.log("listing to from port number 8000");
}));