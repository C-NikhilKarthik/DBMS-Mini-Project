const express = require("express");
const router = express.Router();

const property_reg_controller = require("../controllers/property_reg_controller");


router.route('/').post(property_reg_controller.reg);

module.exports = router;
