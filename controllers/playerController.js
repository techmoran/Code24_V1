const db = require("../models");
const playerObj = db.Player;

exports.getAll = (req,res) =>{
    db.playerObj.findAll().then(players => res.send(players)).catch(err => {
        result.status(500).send({
          message: err.message || "Some error occurred while retrieving data."
        });
      });
}

exports.addNew = (req,res) =>{
    if(req.body.text == null){
        res.status(500).send("Text filed is missing")
    }

    playerObj.create({
        text:req.body.text
    }).then(submited => res.send(submited));
}

exports.findById = (req, res) =>{
    playerObj.findAll({
        where:{
            id:req.params.id
        }
    }).then(player => res.send(player));
}

exports.delete = (req,res) =>{
    playerObj.destroy({
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

    playerObj.update({
        text: req.body.text
    },
    {
        where:{
            id: req.body.id
        }
    }).then(() => res.send("Updated!"))
}