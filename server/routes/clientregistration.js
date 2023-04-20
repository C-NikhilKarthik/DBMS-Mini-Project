const express = require("express");
const router = express.Router();

const client_reg_controller = require("../controllers/client_reg_controller");


router.route('/').post(client_reg_controller.reg);

module.exports = router;
