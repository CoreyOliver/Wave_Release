

module.exports = {
    getRoot: async (req,res) => {
        try {
            res.json('Check Check')
        } catch (error) {
            console.log(error)
        }
    }
};