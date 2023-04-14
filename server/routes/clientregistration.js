const express = require("express");
const router = express.Router();

const client_reg_controller = require("../controllers/client_reg_controller");

// signin
router.route('/').post(client_reg_controller.reg);

//router.route("/slug").post(home_controller.home);

module.exports = router;
