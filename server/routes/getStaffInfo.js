const express = require("express");
const router = express.Router();

const getStaffInfo_controller = require("../controllers/getStaffInfo_controller");


router.route('/:branchName').get(getStaffInfo_controller.data);

module.exports = router;
