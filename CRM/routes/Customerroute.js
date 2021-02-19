let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
let customerSchema=require("../models/CustomerDatabase");
 router.route('/create-customer').post((req,res,next) =>{
    customerSchema.create(req.body,(err,data) =>{
        if(err){
            return next(err)
        }else{
            console.log(data)
            res.json(data)
        }
    })
});
 router.route('/').get((req,res) => {
    customerSchema.find((err,data) =>{
        if(err){
            return next(err)
        }else{
            //console.log(data)
            res.json(data)
        }
    })
 })
 router.route('/edit-customer/:id').get((req,res)=>{
     customerSchema.findById(req.params.id,(err,data) =>{
         if(err){
           res.json({"Error": err})
         }else{           
            res.json(data)
         }
     })
 })
 router.route('/update-customer/:id').put((req,res,next) =>{
     customerSchema.findByIdAndUpdate(req.params.id,{$set:req.body},(err,data)=>{
         if(err){
            return next (err)
            console.log(err)
         }else{
            res.json(data)
            console.log("customer data updated")
         }
     })
 });
 router.route('/delete-customer/:id').delete((req,res,next) => {
     customerSchema.findByIdAndRemove(req.params.id,(err,data) => {
         if(err){
             return next(err)
         }else{
             res.status(200).json({msg:data})
         }
     })
 })
 module.exports=router;