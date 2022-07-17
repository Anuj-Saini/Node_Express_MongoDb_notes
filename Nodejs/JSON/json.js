const fs=require('fs');
const bioData={
    name:"Anuj Saini",
    age: 23,
    channal:"Thapa"
};
const jsonData= JSON.stringify(bioData);
// fs.writeFile("json1.json",jsonData,(err)=>{
//     console.log("done");
// });
fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
    const oriData=JSON.parse(data);
    console.log(oriData);
})

