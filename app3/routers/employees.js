var express=require("express");
var router=express.Router();
var employee=require("../controllers/EmployeeController");

router.get('/',function(req,res){
    employee.list(req,res);
});
router.get("/show/:id",function(req,res){
    employee.show(req,res);
});
router.get("/create",function(req,res){
    employee.create(req,res);
});
router.get('/edit/:id',function(req,res){
    employee.edit(req,res);
});
router.post("/save",function(req,res){
    employee.save(req,res);
});
router.post("/update/:id",function(req,res){
    employee.update(req,res);
});
router.post("/delete/:id",function(req,res){
    employee.delete(req,res);
});
module.exports=router;