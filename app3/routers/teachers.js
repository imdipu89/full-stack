var express=require("express");
var router=express.Router();
var teacher=require("../controllers/TeacherController");
router.get("/",function(req,res){
    teacher.list(req,res);
});
router.get("/show/:id",function(req,res){
    teacher.show(req,res);
});
router.get("/create",function(req,res){
    teacher.create(req,res);
});
router.post("/save",function(req,res){
    teacher.save(req,res);
});
router.get("/edit/:id",function(req,res){
    teacher.edit(req,res);
});
router.post("/update/:id",function(req,res){
    teacher.update(req,res);
});
router.post('/delete/:id',function(req,res){
    teacher.delete(req,res);
});
module.exports=router;
