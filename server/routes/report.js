const express = require("express");
const router = express.Router();

const faq_controller = require("../controllers/report_controller");

router.get("/:branchName"
, faq_controller.data);

module.exports = router;
