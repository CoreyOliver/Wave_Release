const connectDB = require('../config/main.database')

module.exports = {
    getRoot: async (req, res) => {
        try {
            const [rows] = await connectDB.query("select whLocation,          waveNumber,customer,unitCount,date_format(startShip, '%m-%d') as startShip,      date_format(cancelDate, '%m-%d') as cancelDate,date_format(tenderDate, '%m-%d') as tenderDate,    date_format(shipDate, '%m-%d') as shipDate FROM `wholesaleData`")
            console.log(rows)
            res.json(rows)
        } catch (error) {
            console.log(error)
        }
    }
};