const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/main.controllers");

//getters
router.get('/ws', mainControllers.getWSRoot)
router.get('/web', mainControllers.getWebRoot)
router.get('/getOneWave/:wave', mainControllers.getOneWave)

//POST
router.post('/add/WS', mainControllers.addWholesaleWave)

//PUT
router.put('/edit/:wave', mainControllers.editWave)
router.put('/updatePrinted/:wave/:oldPrinted', mainControllers.editWavePrinted)
router.put('/editWave', mainControllers.editWave)


//Delete
router.delete('/delete/:wave', mainControllers.deleteWave)

module.exports = router;