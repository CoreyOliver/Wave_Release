const connectDB = require('../config/main.database')

module.exports = {
    getRoot: async (req, res) => {
        try {
            const data = await connectDB.query('SELECT * FROM `wave batch`', (error, rows) => {
                if(error) throw error;
                console.log(rows)
            })
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    }
};