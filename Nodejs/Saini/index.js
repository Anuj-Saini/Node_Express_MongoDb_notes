const fs=require('fs');
// fs.mkdir('Saini',(err,data)=>{
//     console.log(data);
// });
fs.writeFile('./dex.txt',(err,data)=>{
    console.log(data);
})