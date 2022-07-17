const express=require("express");
const router=new express.Router();
const Student=require("../modules/student");
router.get("/Anuj",(req,res)=>{
    res.send("hello router");
})
router.post("/students", async(req,res)=>{
    try {
    console.log(req.body);
    const user= new Student(req.body);
    const createUser= await user.save();
    res.status(201).send(createUser);
        
    } catch (e) { res.status(400).send(e);}
    
})
router.get("/students", async (req,res)=>{
  try {
   const studentsData= await Student.find();
   res.send(studentsData);
  } catch (e) {
    res.send(e);
  }
})
router.get("/students/:name",async(req,res)=>{
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
router.delete("/students/:id", async (req,res)=>{
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
router.patch("/students/:id",async (req,res)=>{
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
module.exports=router;
