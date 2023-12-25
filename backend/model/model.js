const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        required:[true,"AGE SHOULD BE THERE"]

    },
    country:{
        type:String,
        required:[true,"country should be there"]

    },
 /*  Image:{
        type:String,
        required:[true,"image should be there"]
    }*/
});

module.exports=mongoose.model("Product",productSchema);


