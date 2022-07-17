const EventEmitter=require("events");
const event=new EventEmitter();
event.on("cheakPage",(stc,msg)=>{
    console.log(`Status is ${stc} and message ${msg}`)
})

event.emit("cheakPage",200,"ok");
