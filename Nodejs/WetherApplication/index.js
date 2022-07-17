const http=require('http');
const fs=require('fs');
var requests = require('requests');
const homeFile = fs.readFileSync("home.html", "utf-8");
const replaceVal=(tempval,orgval)=>{
  let tempratue=tempval.replace("{%tempval%}",orgval.main.temp);
   tempratue=tempval.replace("{%temp_min%}",orgval.main.temp_min);
   tempratue=tempval.replace("{%temp_max%}",orgval.main.temp_max);
   tempratue=tempval.replace("{%country%}",orgval.sys.country);
   tempratue=tempval.replace("{%location%}",orgval.name);
   return tempratue;
}
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
requests('http://api.openweathermap.org/data/2.5/weather?q=Saharanpur&units=metric&appid=7071ff237cd86a23205328809e77a97f')
.on('data', function (chunk) {
  const objData=JSON.parse(chunk);
  const arrData=[objData];
  // console.log(arrData[0].main.temp);
  const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join(" ");
       
        res.write(realTimeData);
        // console.log(realTimeData);
})
.on('end', function (err) {
  if (err) return console.log('connection closed due to errors', err);
  res.end();
});
    }
});
server.listen(8000,"127.0.0.1");
