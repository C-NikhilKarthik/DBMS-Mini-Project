const express = require("express");
const router = express.Router();

const ad_reg_controller = require("../controllers/ad_reg_controller");


router.route('/').post(ad_reg_controller.reg);



module.exports = router;
