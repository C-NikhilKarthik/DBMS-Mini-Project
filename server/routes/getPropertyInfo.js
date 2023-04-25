
const express = require("express");
const router = express.Router();

const getPropertyInfo_controller = require("../controllers/getPropertyInfo_controller");


router.route('/').get(getPropertyInfo_controller.data);

module.exports = router;