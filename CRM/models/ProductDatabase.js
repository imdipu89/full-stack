var mongoose=require("mongoose");
var ProductSchema=new mongoose.Schema({
    productid:String,
    customerid:String,
    orderid:String,
    productname:String,
    productcompany:String,
    priceperquantity:String,
    productquantity:Number,
    totalproductstock:Number
});
module.exports=mongoose.model("ProductDataBase" ,ProductSchema);