const express = require("express");
const router = express.Router();

const Image_controller = require("../controllers/Image_controller");


router.route('/').get(Image_controller.data);

module.exports = router;
