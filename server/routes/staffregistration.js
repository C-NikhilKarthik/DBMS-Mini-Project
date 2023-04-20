const express = require("express");
const router = express.Router();

const staff_reg_controller = require("../controllers/staff_reg_controller");

router.route('/').post(staff_reg_controller.reg);

module.exports = router;
