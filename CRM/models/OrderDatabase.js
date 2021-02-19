var mongoose=require("mongoose");

var OrderSchema=new mongoose.Schema({
    productid:String,
    customerid:String,
    productquantity:Number,
    producttotalpayment:Number,
    paymentmethod:String,
    productduepayment:Number,
    advancepayment:Number,
    productorderstatus:String
});
module.exports=mongoose.model("OrderDatabase",OrderSchema);