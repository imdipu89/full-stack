var express=require("express");
var router=express.Router();
var  student=require("../controllers/StudentController");
router.get("/",function(req,res){
    student.list(req,res);
});
router.get("/create",function(req,res){
    student.create(req,res);
});
router.get("/show/:id",function(req,res){
    student.show(req,res);
});
router.post("/save",function(req,res){
    student.save(req,res);
});
router.get("/edit/:id",function(req,res){
    student.edit(req,res);
});
router.post("/update/:id",function(req,res){
    student.update(req,res);
});
router.post("/delete/:id",function(req,res){
    student.delete(req,res);
});
module.exports=router;