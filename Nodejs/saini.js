const fs=require('fs');
// fs.mkdir('thapa',(err)=>{
//     console.log("create suseefully");
// });
// fs.writeFile("./thapa/bio.txt","Anuj is don file create sucessfully",(err)=>{
//     console.log("file is created");
// })
//  fs.rename("./thapa/bio.txt","./thapa/mybio.txt",(err)=>{
//     console.log("err");
//  })
// fs.appendFile("./thapa/mybio.txt"," sun of sardaar ", ()=>{
//     console.log("file created sucessfully");
// })
// fs.readFile("./thapa/mybio.txt","utf-8",(err,data)=>{
//     console.log(data);
// })
// fs.unlink("./thapa/mybio.txt",(err)=>{
//     console.log(err);
// })
fs.rmdir("./thapa",(err)=>{
    console.log(err);
})