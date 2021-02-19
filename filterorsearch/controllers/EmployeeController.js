var moongoose=require('mongoose');
const { find } = require('../models/Employee');
var Employee=require("../models/Employee");
var employeeController={};
employeeController.list=function(req,res){
    Employee.find({}).exec(function(err,employees){
        if(err){
            console.log(err);
        }else{
            res.render('../views/employees/index',{employees:employees});
        }
    });
};

employeeController.create=function(req,res){
    res.render('../views/employees/create');
}
employeeController.save=function(req,res){
    var employee=new Employee(req.body);
    employee.save(function(err){
        if(err){
            console.log(err);
            res.render("../views/employees/create");
        }else{
            console.log("data created");
            res.redirect('/employees/show/'+employee._id);
        }
    });
};
employeeController.show=function(req,res){
    Employee.findOne({_id:req.params.id}).exec(function(err,employee){
        if(err){
            console.log(err)
        }else{
            res.render("../views/employees/show",{employee:employee});
        }
    });
};
employeeController.filter=function(req,res){
        var department=req.body.department;
        Employee.find({department:department},(error,employee) => {
            if(error){
                console.log(error);
               //res.render("../views/employees/show/"+employee._id);
            }else{         
                res.render("../views/employees/filter",{employee:employee});
            }
        });
    };
module.exports=employeeController;