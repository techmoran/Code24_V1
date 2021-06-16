const db = require("../models");
const playerObj = db.Player;
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.getAllPlayer = async (req,res) =>{
    try {
        let allPlayers = await playerObj.findAll();
        return res.json(allPlayers)
    }catch(err){
        return res.status(500).send(err)
    }    
}

// Create Player profile
exports.addNewPlayer = async (req,res) =>{
    const errorMsg =[];
    const newPlayer = req.body;
    if( newPlayer== null){
        return res.json({
            message:"Validation Error",
            error : "Player Object is null"
        })
    }
    if(newPlayer.pname == null || (!newPlayer.pname)){
        errorMsg.push("Player Name filed is missing")
    }
    if(newPlayer.email == null || (!newPlayer.email)){
        errorMsg.push("Email Address filed is missing")
    }
    if(errorMsg.length >0)
    {
        return res.json({
            message:"Validation Error",
            error : errorMsg
        })
    }

    try{
    let hashPassword = await bcrypt.hash(newPlayer.password, saltRounds)
        let playerCreated = await playerObj.create({
            pname:newPlayer.pname,
            email : newPlayer.email,
            hpassword : hashPassword,
            authlink : newPlayer.authlink
        });
        return res.json({
            "message":"New Player record created",
            "player" : playerCreated
        })
    }catch(err){
        return res.status(500).send(err)
    }
}