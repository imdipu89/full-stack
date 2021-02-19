var express=require("express");
var router=express.Router();
var student=require("../controllers/StudentController");
//get all student
router.get("/",function(req,res){
    student.list(req,res);
});
//get student by id
router.get("/show/:id",function(req,res){
    student.show(req,res);
});
//create student
router.get("/create",function(req,res){
    student.create(req,res);
});
//save student
router.post("/save",function(req,res){
    student.save(req,res);
});
//edit student
router.get("/edit/:id",function(req,res){
    student.edit(req,res);
});
//update student
router.post("/update/:id",function(req,res){
    student.update(req,res);
});
//delete a student
router.get("/delete/:id",function(req,res,next){
    student.delete(req,res);
});
module.exports=router;