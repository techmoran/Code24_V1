const db = require("../models");
const todoObj = db.Todo;

exports.getAll = async (req,res) =>{
    try {
        let allTodos = await db.Todo.findAll();
        return res.json(allTodos)
    }catch(err){
        return res.status(500).send(err)
    }
}

exports.addNew = async (req,res) =>{
    const newTodo = req.body;
    if(  newTodo == null || newTodo.text == null){
        res.status(500).send("Text Cannot be empty")
    }

    try{
       let todoCreated= await todoObj.create(newTodo);
        return res.json({
            "message" : "Created sucessfully",
            todoCreated :  todoCreated
        })
    }catch (err) {
        return res.status(500).send(err)
      }
}

exports.findById = async (req, res) =>{
    try{   
        let todoOne = await todoObj.findAll({
                    where:
                    {
                        id:req.params.id
                    }
                });
        return res.json({
            message:"Feeling good",
            todoOne: todoOne
        });
    }catch (err) {
        return res.status(500).send(err)
      }
}

exports.delete = async (req,res) =>{
    try{
        await todoObj.destroy({
            where:
            {
                id: req.params.id
            }
        })
        return res.json({
            "message" : "Deleted sucessfully"
        })
    }catch(err)  {
        return res.status(500).send(err)
    }
}

exports.update = async (req, res) =>{
    if(req.body.text == null){
        res.status(500).send("Text Cannot be empty")
    }

    if(req.body.id == null){
        res.status(500).send("Id Cannot be empty")
    }

    try{
        await  todoObj.update({
            text: req.body.text
        },
        {
            where:{
                id: req.body.id
            }
        })
        return res.json({
            "message" : "Updated sucessfully"
        })
    }catch(err){
        res.status(500).send("Id Cannot be empty")
    }
}