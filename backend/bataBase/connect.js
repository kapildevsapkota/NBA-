const mongoose =require("mongoose")
 uri="mongodb+srv://sapkota2:sapkota2@cluster0.0ui25mw.mongodb.net/?retryWrites=true&w=majority";

 const connectDB=()=>{
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
 }

 module.exports=connectDB;