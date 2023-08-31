const connectDB = require('../config/main.database')

module.exports = {
    getRoot: async (req, res) => {
        try {
            const [rows] = await connectDB.query("select whLocation,          waveNumber,customer,unitCount,date_format(startShip, '%m/%d') as startShip,      date_format(cancelDate, '%m/%d') as cancelDate,date_format(tenderDate, '%m/%d') as tenderDate,    date_format(shipDate, '%m/%d') as shipDate, printed, date_format(waveDate, '%m/%d') as waveDate, user FROM `wholesaleData`")
            console.log(rows)
            res.json(rows)
        } catch (error) {
            console.log(error)
        }
    },
    addWholesaleWave: async (req, res) => {
        const updateDate = (date) => {
            const currentYear = new Date().getFullYear()
            return `${currentYear}-${date.split('/').join('-')}`            
        }
        const startShipToAdd = updateDate(req.body.waveStartShip)
        const cancelDateToAdd = updateDate(req.body.waveCancelDate)
        const shipDateToAdd = updateDate(req.body.waveShipDate)
        const tenderDateToAdd = updateDate(req.body.waveTenderDate)
        const waveDateToAdd = updateDate(req.body.waveDate)
        try {
            const [rows] = await connectDB.query(`INSERT INTO 'wave_release'.'wholesaleData' ('whLocation', 'waveNumber', 'customer', 'unitCount', 'startShip', 'cancelDate', 'tenderDate', 'shipDate', 'printed', 'waveDate', 'user') VALUES ('${req.body.waveLocation}', '${req.body.waveNumber}', '${req.body.waveCustomer}', '${req.body.waveCount}', '${startShipToAdd}', '${cancelDateToAdd}', '${tenderDateToAdd}', '${shipDateToAdd}', '${req.body.wavePrinted}', '${waveDateToAdd}', '${req.body.waveUser.toUpperCase()}');`)
            console.log(req.body)

            //need to adjust the date format for the request
            
        } catch (error) {
            console.log(error)
        }
    }
};