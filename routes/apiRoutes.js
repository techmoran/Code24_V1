const express = require("express");
const router = express.Router();
const todoAction = require("../controllers/todoController")
const playerProfile = require("../controllers/playerController")


router.post("/newplayer", playerProfile.addNewPlayer)
router.get("/getallplayer",playerProfile.getAllPlayer);

router.get("/all",todoAction.getAll);
router.post("/new",todoAction.addNew);
router.get("/find/:id",todoAction.findById);
router.delete("/delete/:id",todoAction.delete);
router.put("/edit",todoAction.update);



module.exports = router;
