const router = require("express").Router();
const controller = require("../controller/userController");

router.get("/", controller.getUsers);

module.exports = router;