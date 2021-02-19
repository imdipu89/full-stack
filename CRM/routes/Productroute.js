let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
let productSchema=require('../models/ProductDatabase');
router.route('/create-product').post((req,res,next) =>{
    productSchema.create(req.body,(err,data) =>{
        if(err){
            return next(err)
        }else{
            console.log(data)
            res.json(data)
        }
    })
})
router.route('/').get((req,res) =>{
    productSchema.find((err,data) =>{
        if(err){
            return next(err)
        }else{
            console.log(data)
            res.json(data)
        }
    })
})
router.route('/edit-product/:id').get((req,res)=>{
    productSchema.findById(req.params.id,(err,data) =>{
        if(err){
          res.json({"Error": err})
        }else{           
           res.json(data)
        }
    })
})
router.route('/update-product/:id').put((req,res) =>{
    productSchema.findByIdAndUpdate(req.params.id,{
        $set:req.body},(err,data) =>{
            if(err){
                return next (err)
                console.log(err)
            }else{
                res.json(data)
                console.log("data update sucessfully")
            }
        })
    })
router.route('/delete-product/:id').delete((req,res,next,) =>{
    productSchema.findByIdAndRemove(req.params.id,(err,data) =>{
        if(err){
            return next (err)
        }else{
            res.status(200).json({msg:data});
        }
    })
})
module.exports=router;