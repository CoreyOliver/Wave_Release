const connectDB = require('../config/main.database')

module.exports = {
    getRoot: async (req, res) => {
        try {
            const [rows] = await connectDB.query("SELECT * FROM `wave batch`")
            res.json(rows)
        } catch (error) {
            console.log(error)
        }
    }
};