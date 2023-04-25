const express = require("express");
const router = express.Router();

const lease_reg_controller = require("../controllers/lease_reg_controller");


router.route('/').post(lease_reg_controller.reg);

module.exports = router;
