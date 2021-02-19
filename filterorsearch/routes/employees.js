var express=require('express');
let Employee = require('../models/Employee');
var app=express();
var employee=require('../controllers/EmployeeController')
var employeeRoute=express.Router();
employeeRoute.get('/search_result',function(req,res){
    //if(req.query.department){

    var dept=req.query.department;
   // console.log(req.body);
    Employee.find({"department":dept},(error,data) => {
        if(error){
            console.log(error);
        }else{
           //res.render("../views/employees/searchresult");
           res.json({"data is getting":data});
        }
    });
    //res.json({"response": dept});
//}
//else {
  //  res.json({"response": "No data"});
//}
});
employeeRoute.get('/',function(req,res){
    employee.list(req,res);
});
employeeRoute.get('/show/:id',function(req,res){
    employee.show(req,res);
});
employeeRoute.post('/save',function(req,res){
    employee.save(req,res);
});
employeeRoute.get('/create',function(req,res){
    employee.create(req,res);
});

employeeRoute.get('/filter',function(req,res){
    employee.filter(req,res);
});
module.exports=employeeRoute;
