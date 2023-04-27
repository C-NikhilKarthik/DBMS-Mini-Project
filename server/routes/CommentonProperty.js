const express = require("express");
const router = express.Router();

const Comment_controller = require("../controllers/Comment_controller");


router.route('/').post(Comment_controller.data);

module.exports = router;
