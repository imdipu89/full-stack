var mongoose=require("mongoose");
var StudentSchema =new mongoose.Schema({
    name:String,
    standard:String,
    email:String,
    address:String,
    phoneno:Number,
    updated_at:{type:Date,default:Date.now},
});
module.exports=mongoose.model("Student",StudentSchema);