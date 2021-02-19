var mongoose=require("mongoose");
var Student=require("../models/Student");
var studentController={};
studentController.list=function(req,res){
    Student.find({}).exec(function(err,students){
        if(err){
            console.log(err);
        }else
        {
            res.render("../views/students/index",{students:students});
        }
    });
};
studentController.show=function(req,res){
    Student.findOne({_id:req.params.id}).exec(function(err,student){
        if(err){
            console.log(err);
        }else{
            res.render("../views/students/show",{student:student});
        }
    });
};
studentController.create=function(req,res){
    res.render("../views/students/create");
};
studentController.save=function(req,res){
    var student=new Student(req.body);
    student.save(function(err){
        if(err){
            console.log(err);
            res.render("../views/students/create");
        }else{
            console.log("data created");
            res.redirect("/students/show/"+student._id);
        }
    });
};
studentController.edit=function(req,res){
    Student.findOne({_id:req.params.id}).exec(function(err,student){
        if(err){
            console.log(err);
        }else{
            res.render('../views/students/edit',{student:student});
        }
    });
};
studentController.update=function(req,res){
    Student.findByIdAndUpdate(req.params.id,{$set:{name:req.body.name,fathername:req.body.fathername,standard:req.body.standard,address:req.body.address,phoneno:req.body.phoneno}},{new:true},function(err,student){
        if(err){
            console.log(err);
            res.render("../views/students/edit",{student:req.body});
        }
        res.render("/students/show/"+student._id);
    });
};
studentController.delete=function(req,res){
    Student.remove({_id:req.params.id},function(err){
        if(err){
            console.log(err);
        }else{
            console.log("student deleted");
            res.redirect("/students");
        }
    });
};
module.exports=studentController;