var mongoose=require("mongoose");
var Employee=require("../models/employees");
var employeeController={};
//show listr of employee
employeeController.list=function(req,res){
    Employee.find({}).exec(function(err,employees){
        if(err){
            console.log('error',err)
        }else{
            res.render("../views/employees/index",{employees:employees});
        }
    });
}
///show employee by id
employeeController.show=function(req,res){
    Employee.findOne({_id:req.params.id}).exec(function(err,employee){
        if(err){
            console.log("error",err);
        }else{
            res.render("../views/employees/show",{employee:employee});
        }
    });
};
//create new employee
employeeController.create=function(req,res){
    res.render('../views/employees/create');
};
//save new employee
employeeController.save=function(req,res){
    var employee=new Employee(req.body);
    employee.save(function(err){
        if(err){
            console.log(err);
            res.render("../views/employees/create");
        }else{
            console.log("succesfully created a employee");
            res.redirect("/employees/show/"+employee._id);
        }
    });
};
//edit an employee
employeeController.edit=function(req,res){
    Employee.findOne({_id:req.params.id}).exec(function(err,employee){
        if(err){
            console.log("error:",err);
        }else{
            res.render("../views/employees/edit",{employee:employee});
        }
    });
};
//update an employee
employeeController.update=function(req,res){
    Employee.findByIdAndUpdate(req.params.id,{$set:{name:req.body.name,address:req.body.address,position:req.body.position,salary:req.body.salary}},
        {new:true},function(err,employee){
            if(err){
                console.log(err);
                res.render("../views/employees/edit",{employee:req.body});
            }
            res.redirect("/employees/show/"+employee._id);
        });
};
//delete a employee
employeeController.delete=function(req,res){
    Employee.remove({_id:req.params.id},function(err){
        if(err){
            console.log(err);
        }else{
            console.log("employee deleted");
            res.redirect("/employees");
        }
    });
};
module.exports=employeeController;