const express = require("express");
const router = express.Router();
const serviceData = require("../controllers/service-controller"); // Import the courses controller

router.route("/service").get(serviceData.getService);

module.exports = router;
