const express = require("express");
const router = express.Router();

const getbranches_controller = require("../controllers/getbranches_controller");


router.route('/').get(getbranches_controller.data);

module.exports = router;
