const express = require("express");
const router = express.Router();

const getStaffInfo_controller = require("../controllers/getPropertynumber");


router.route('/').get(getStaffInfo_controller.data);

module.exports = router;
