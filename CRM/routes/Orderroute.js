let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
let orderSchema=require("../models/OrderDatabase");
router.route('/create-order').post((req,res,next) =>{
    orderSchema.create(req.body,(err,data) =>{
        if(err){
            return next(err)
        }else{
            console.log(data)
            res.json(data)
        }
    })
})
router.route('/').get((req,res) => {
    orderSchema.find((err,data) => {
        if(err){
            return next(err)
        }else{
           //console.log(data)
            res.json(data)
        }
    })
})
router.route('/edit-order/:id').get((req,res)=>{
    orderSchema.findById(req.params.id,(err,data) =>{
        if(err){
          res.json({"Error": err})
        }else{           
           res.json(data)
        }
    })
})
router.route('/update-order/:id').put((req,res,next) =>{
    orderSchema.findByIdAndUpdate(req.params.id,{$set:req.body},(err,data)=>{
        if(err){
           return next (err)
           console.log(err)
        }else{
           res.json(data)
           console.log("order data updated")
        }
    })
});
router.route('/delete-order/:id').delete((req,res,next) => {
    orderSchema.finByIdAndRemove(req.params.id,(err,data) => {
        if(err){
            return next(err)
        }else{
            res.status(200).json({msg:data})
            //console.log("data delete sucessfully")
        }
    })
})
module.exports=router;