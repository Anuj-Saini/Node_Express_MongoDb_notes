const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect('mongodb://localhost:27017/test2',{}).then(()=>console.log("connection sucessfull......"))
.catch((err)=>console.log(err));
const playlistSchema=new mongoose.Schema({
    name : {
        type: String,
        required : true,
        unique : true,
        lowercase: true,
        trim: true,
        minLength:2,
        maxLength:8,
    },
    ctype:  {
        type:String,
        lowercase:true,
        enum:["front end","back end","database"]
    },
    videos:{
        type:Number,
        validate(value){
            if(value<0){
              throw new Error("Can not validate less then zero");
            }
        }
    },
    author: String,
    email:{
       type:String,
       required:true,
       unique:true,
       validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid Email");
        }
       }

    },
    active: Boolean,
    date:{
        type:Date,
        default: Date.now
    }
})
const Playlist= new mongoose.model("Playlist",playlistSchema);
const createDocument= async()=>{
    try{
        // const reduxPlaylist=new Playlist({
        //     name : "Redux JS",
        //     ctype:  "front End",
        //     videos: 10,
        //     author: "Anuj Saini",
        //     active: true,
           
        // })
        // const reactPlaylist=new Playlist({
        //     name : "React JS",
        //     ctype:  "Backend End",
        //     videos: 18,
        //     author: "Anuj Saini",
        //     active: true,
           
        // })
        const mongoPlaylist=new Playlist({
            name : "Js",
            ctype:  "Back End",
            videos: 5,
            author: "Anuj Saini",
            email:"anuj@com.co",
            active: true,
           
        })
        // const javaPlaylist=new Playlist({
        //     name : "Javascript JS",
        //     ctype:  "Backend End",
        //     videos: 80,
        //     author: "Anuj Saini",
        //     active: true,
           
        // })
        const result=await Playlist.insertMany([mongoPlaylist])
        console.log(result);
    }catch(err){
        console.log(err);
    }
   
}
createDocument();
const getDocument=async () =>{
    try{
        const result=await Playlist.find({author:"Anuj Saini"})
        .select({name:1})
        .sort({name:-1});
        console.log(result);
    }catch(err){
        console.log(err);
    }
    

    
    

   
}
// getDocument();
const updateDocument=async (_id)=>{
try {
    const result=await Playlist.findByIdAndUpdate({_id},{
        $set:{
            name:"javaScript"
        },
        
    },{
        new:true,
    }
    );
    console.log(result);
} catch (err) {
    console.log(err);
}
}
// updateDocument("62ced606158875ca4f6b9448");
const  deleteDocument=async(_id)=>{
try {
    const result=await Playlist.deleteMany({_id})
        console.log(result);
    
} catch (error) {
    console.log(error);
}
}
// deleteDocument("62ced606158875ca4f6b9445","62ceabeff5597f978f59c19c");