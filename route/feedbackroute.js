const express = require("express")
const router = express.Router();
const { createFeedback } = require("../controller/feedbackController")

router.post("/" , createFeedback)

module.exports = router;