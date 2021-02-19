var mongoose=require('mongoose');
var StudentSchema=new mongoose.Schema({
    name:String,
    course:String,
    phoneno:Number,
});
module.exports=mongoose.model('Student',StudentSchema);