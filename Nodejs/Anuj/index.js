const fs= require('fs');
// fs.writeFile("anuj.txt","MY name is anuj Saini",(err)=>{
//  console.log("file created susefully");
//  console.log(err);
// });
// fs.appendFile("anuj.txt"," Plz Watch My Chennal",(err)=>{
// console.log("fileAppend");
// })
// fs.readFile("anuj.txt","utf-8",(err,data)=>{
//     console.log(data);
// })
const data=fs.readFile("anuj.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("Afer the data");