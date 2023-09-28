const connectDB = require("../config/main.database");

module.exports = {
  getRoot: async (req, res) => {
    try {
      const [rows] = await connectDB.query(
        "select whLocation, waveNumber,customer,unitCount,date_format(startShip, '%m/%d') as startShip,      date_format(cancelDate, '%m/%d') as cancelDate,date_format(tenderDate, '%m/%d') as tenderDate,    date_format(shipDate, '%m/%d') as shipDate, printed, date_format(waveDate, '%m/%d') as waveDate, user FROM `wholesaleData`"
      );
      console.log('got root');
      res.json(rows);
    } catch (error) {
      console.log(error);
    }
  },
  getOneWave: async (req, res) => {
    try {
      const [rows] = await connectDB.query(
        `select whLocation, waveNumber,customer,unitCount,date_format(startShip, '%m/%d') as startShip,      date_format(cancelDate, '%m/%d') as cancelDate,date_format(tenderDate, '%m/%d') as tenderDate,    date_format(shipDate, '%m/%d') as shipDate, printed, date_format(waveDate, '%m/%d') as waveDate, user FROM wave_release.wholesaledata WHERE(waveNumber = ${req.params.wave})`
      )
      console.log(rows)
      res.json(rows)
    } catch (error) {
      console.log(error)
    }
  },
  addWholesaleWave: async (req, res) => {
    const updateDate = (date) => {
      const currentYear = new Date().getFullYear();
      let month = date.split("/")[0];
      let day = date.split("/")[1];
      if (month.length < 2) {
        month = `0${month}`;
      }
      if (day.length < 2) {
        day = `0${day}`;
      }
      return `${currentYear}-${month}-${day}`;
    };
    const startShipToAdd = updateDate(req.body.waveStartShip);
    const cancelDateToAdd = updateDate(req.body.waveCancelDate);
    const shipDateToAdd = updateDate(req.body.waveShipDate);
    const tenderDateToAdd = updateDate(req.body.waveTenderDate);
    const waveDateToAdd = updateDate(req.body.waveDate);
    try {
      const [rows] = await connectDB.query(
        `INSERT INTO wave_release.wholesaleData (whLocation, waveNumber, customer, unitCount, startShip, cancelDate, tenderDate, shipDate, printed, waveDate, user) VALUES ('${
          req.body.waveLocation
        }', '${req.body.waveNumber}', '${req.body.waveCustomer}', '${
          req.body.waveCount
        }', '${startShipToAdd}', '${cancelDateToAdd}', '${tenderDateToAdd}', '${shipDateToAdd}', '${
          req.body.wavePrinted
        }', '${waveDateToAdd}', '${req.body.waveUser.toUpperCase()}');`
      );

      res.json(rows);
    } catch (error) {
      console.log(error);
    }
  },
  editWave: async (req, res) => {
    //date set up
    const updateDate = (date) => {
      const currentYear = new Date().getFullYear();
      let month = date.split("/")[0];
      let day = date.split("/")[1];
      if (month.length < 2) {
        month = `0${month}`;
      }
      if (day.length < 2) {
        day = `0${day}`;
      }
      return `${currentYear}-${month}-${day}`;
    };
    const startShipToEdit = updateDate(req.body.startShip);
    const cancelDateToEdit = updateDate(req.body.cancelDate);
    const shipDateToEdit = updateDate(req.body.shipDate);
    const tenderDateToEdit = updateDate(req.body.tenderDate);
    try {
      //debuggin
      console.log(req.body);
      //add the query
      //we want to select the correct wave from the request
      const [rows] = await connectDB.query(
        `UPDATE wave_release.wholesaledata SET whLocation = ${req.body.location}, waveNumber = ${req.body.wave}, customer = '${req.body.customer}', unitCount = ${req.body.units},startShip = '${startShipToEdit}', cancelDate = '${cancelDateToEdit}',tenderDate = '${tenderDateToEdit}',shipDate = '${shipDateToEdit}',user = '${req.body.user}' WHERE(waveNumber = ${req.body.wave});`
      );
      //update the line with all of the data from the request on each column
      //object is good to go
      res.json(rows)
      //take the object and query sql to take care of it
    } catch (error) {
      console.log(error);
    }
  },
  deleteWave: async (req, res) => {
    console.log(req.params.wave);
    try {
      const [rows] = await connectDB.query(
        `DELETE FROM wholesaleData WHERE (waveNumber = '${req.params.wave}');`
      );
      res.json(rows);
    } catch (error) {
      console.log(error);
    }
  },

  editWavePrinted: async (req, res) => {
    const waveToUpdate = req.params.wave;
    const newPrinted = req.params.oldPrinted === "N" ? "Y" : "N";
    console.log(waveToUpdate, newPrinted);
    try {
      const [rows] = await connectDB.query(
        `UPDATE wholesaleData SET printed = '${newPrinted}' WHERE (waveNumber = '${waveToUpdate}');`
      );
      res.json(rows);
    } catch (error) {
      console.log(error);
    }
  },
};
