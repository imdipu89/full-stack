var express=require("express");
var router=express.Router();
var employee=require('../controllers/EmployeeController');
//get all employee
router.get("/",function(req,res){
    employee.list(req,res);
});
//get single employee by id
router.get('/show/:id',function(req,res){
    employee.show(req,res);
});
//create employee
router.get('/create',function(req,res){
    employee.create(req,res);
});
//save employee
router.post("/save",function(req,res){
    employee.save(req,res);
});
//edit employee
router.get('/edit/:id',function(req,res){
    employee.edit(req,res);
});
//edit update
router.post('/update/:id',function(req,res){
    employee.update(req,res);
});
//edit update
router.post('delete/:id',function(req,res,next){
    employee.delete(req,res);
});
module.exports=router;