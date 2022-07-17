const mongoose=require("mongoose");
const validator=require("validator");
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,


    },
    Email:{
        type:String,
        required:true,
        unique:[true,"Invalid Email"],
        validator(value){
            if(!validator.isEmail()){
                throw new Error("Invalide gamil");
            }
        }
    },
    Phone:{
        type:Number,
        required:true,
        // min:10,
        // max:10,
        // unique:true
    },
    adress:{
        type:String,
        required:true
    }
})
const Student=new mongoose.model("Student",studentSchema);
module.exports=Student;