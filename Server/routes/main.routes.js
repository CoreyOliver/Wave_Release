const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/main.controllers");

//getters
router.get('/', mainControllers.getRoot)

//POST
router.post('/addWS', mainControllers.addWholesaleWave)

module.exports = router;