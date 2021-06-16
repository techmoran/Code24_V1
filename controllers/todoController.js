const db = require("../models");
const todoObj = db.Todo;

exports.getAll = (req,res) =>{
    db.Todo.findAll().then(todos => res.send(todos)).catch(err => {
        result.status(500).send({
          message: err.message || "Some error occurred while retrieving data."
        });
      });
}

exports.addNew = (req,res) =>{
    if(req.body.text == null){
        res.status(500).send("Text Cannot be empty")
    }

    todoObj.create({
        text:req.body.text
    }).then(submitedTodo => res.send(submitedTodo));
}

exports.findById = (req, res) =>{
    todoObj.findAll({
        where:{
            id:req.params.id
        }
    }).then(todo => res.send(todo));
}

exports.delete = (req,res) =>{
    todoObj.destroy({
        where:
        {
            id: req.params.id
        }
    }).then(()=>res.send("Deleted!"))
}

exports.update = (req, res) =>{
    if(req.body.text == null){
        res.status(500).send("Text Cannot be empty")
    }

    if(req.body.id == null){
        res.status(500).send("Id Cannot be empty")
    }

    todoObj.update({
        text: req.body.text
    },
    {
        where:{
            id: req.body.id
        }
    }).then(() => res.send("Updated!"))
}