const express=require("express");
require("./db/conn");
const studentRouter=require("./router/student");
const Student=require("./modules/student");
const app=express();
app.use(express.json());
const port=process.env.PORT || 8000;
app.use(studentRouter);

// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user= new Student(req.body);
//     user.save().then(()=>{
//      res.status(201).send(user);
//     }).catch((err)=>{
//         res.status(400).send(err);
//     })
// })
//1.create a router
// 
//2.define a router

//3.we need to resister in router


app.post("/students", async(req,res)=>{
    try {
    console.log(req.body);
    const user= new Student(req.body);
    const createUser= await user.save();
    res.status(201).send(createUser);
        
    } catch (e) { res.status(400).send(e);}
    
})
app.get("/students", async (req,res)=>{
  try {
   const studentsData= await Student.find();
   res.send(studentsData);
  } catch (e) {
    res.send(e);
  }
})
app.get("/students/:name",async(req,res)=>{
    try {
        const _id=req.params.id;
        const studentData=await Student.findById({_id});
        console.log(studentData);
        if(!studentData){
            res.status(404).send();
        }
        else{
            res.send(studentData);
        }
       
    } catch (error) {
        res.status(500).send(error);
    }
})
app.delete("/students/:id", async (req,res)=>{
    try {
        const _id=req.params.id;
        const deleteStudent=await Student.findByIdAndDelete({_id});
        console.log(deleteStudent);
        if(!deleteStudent){
            res.status(404).send();
        }
        else{
            res.send(deleteStudent);
        }
        
    } catch (error) {
        res.status(500).send(error);
    }
})
app.patch("/students/:id",async (req,res)=>{
try {
    const _id=req.params.id;
const update_data= await Student.findByIdAndUpdate(_id,req.body,{
    new:true
});
console.log(update_data);
if(!req.params.id){
    res.status(404).send();
}
else{res.send(update_data);}

} catch (error) {
    res.status(500).send(error);
}
})
app.listen(port,(req,res)=>{
    console.log(`connect to set up ${port} number`);
})