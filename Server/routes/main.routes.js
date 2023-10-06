const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/main.controllers");

//getters
router.get('/ws', mainControllers.getWSRoot)
router.get('/web', mainControllers.getWebRoot)
router.get('/getOneWave/:wave', mainControllers.getOneWave)

//POST
router.post('/add/WS', mainControllers.addWholesaleWave)
router.post('/add/web', mainControllers.addWebWave)

//PUT
router.put('/edit/:wave', mainControllers.editWave)
router.put('/updatePrinted/:wave/:oldPrinted', mainControllers.editWavePrinted)
router.put('/updateWebPrinted/:wave/:oldPrinted', mainControllers.editWebWavePrinted)
router.put('/editWave', mainControllers.editWave)


//Delete
router.delete('/delete/:wave', mainControllers.deleteWave)
router.delete('/deleteWebWave/:wave', mainControllers.deleteWebWave)

module.exports = router;