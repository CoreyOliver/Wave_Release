const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/main.controllers");

//getters
router.get('/', mainControllers.getRoot)

//POST
router.post('/add/WS', mainControllers.addWholesaleWave)

//PUT
router.put('/edit/:wave', mainControllers.editWave)

//Delete
router.delete('/delete/:wave', mainControllers.deleteWave)

module.exports = router;