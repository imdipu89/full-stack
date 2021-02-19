var mongoose=require('mongoose');
var Teacher=require('../models/Teacher');
var teacherController={};
//show list
teacherController.list=function(req,res){
    Teacher.find({}).exec(function(err,teachers){
        if(err){
            console.log("error",err);
        }else{
            res.render("../views/teachers/index",{teachers:teachers});
        }
    });
};
teacherController.show=function(req,res){
    Teacher.findOne({_id:req.params.id}).exec(function(err,teacher){
        if(err){
            console.log("error",err);
        }else{
            res.render('../views/teachers/show',{teacher:teacher});
        }
    });
};
teacherController.create=function(req,res){
    res.render('../views/teachers/create');
};
teacherController.save=function(req,res){
    var teacher=new Teacher(req.body);
    teacher.save(function(err){
        if(err){
        console.log(err);
        res.render("../views/teachers/create");
        }else{
            console.log("data created succesfully");
            res.redirect('/teachers/show/'+teacher._id);
        }
    });
};
teacherController.edit=function(req,res){
    Teacher.findOne({_id:req.params.id}).exec(function(err,teacher){
        if(err){
            console.log("error",err);
        }else{
            res.render("../views/teachers/edit",{teacher:teacher});
        }
    });
};
teacherController.update=function(req,res){
    Teacher.findByIdAndUpdate(req.params.id,{$set:{name:req.body.name,department:req.body.department,email:req.body.email,address:req.body.address,phoneno:req.body.phoneno}},{new:true},function(err,teacher){
        if(err){
            console.log(err);
            res.render('../views/teachers/edit',{teacher:teacher});
        }
        res.redirect('/teachers/show/'+teacher._id);
    });
};
teacherController.delete = function(req, res) {
    Teacher.remove({_id: req.params.id}, function(err) {
      if(err) {
        console.log(err);
      }
      else {
        console.log("teacher record deleted");
        res.redirect("/teachers");
      }
    });
  };
  
module.exports=teacherController;