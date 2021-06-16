const express = require("express");
const router = express.Router();
const todoAction = require("../controllers/todoController")

router.get("/all",todoAction.getAll);
router.post("/new",todoAction.addNew);
router.get("/find/:id",todoAction.findById);
router.delete("/delete/:id",todoAction.delete);
router.put("/edit",todoAction.update);

module.exports = router;
