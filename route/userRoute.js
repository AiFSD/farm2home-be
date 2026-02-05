const express = require("express")
const router = express.Router()
const {createUsers} = require("../controller/userControllers")

router.post("/" , createUsers)

module.exports = router;