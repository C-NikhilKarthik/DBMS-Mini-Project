const express = require("express");
const router = express.Router();

const owner_reg_controller = require("../controllers/owner_reg_controller");


router.route('/').post(owner_reg_controller.reg);

module.exports = router;
