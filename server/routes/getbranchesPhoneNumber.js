const express = require("express");
const router = express.Router();

const getbranchesPhoneNumber_controller = require("../controllers/getbranchesPhoneNumber_controller");


router.route('/').get(getbranchesPhoneNumber_controller.data);

module.exports = router;
