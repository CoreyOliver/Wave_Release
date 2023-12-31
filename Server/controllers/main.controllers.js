const connectDB = require("../config/main.database");

module.exports = {
  getWSRoot: async (req, res) => {
    try {
      const [rows] = await connectDB.query(
        "select whLocation, waveNumber,customer,unitCount,date_format(startShip, '%m/%d') as startShip,      date_format(cancelDate, '%m/%d') as cancelDate,date_format(tenderDate, '%m/%d') as tenderDate,    date_format(shipDate, '%m/%d') as shipDate, printed, date_format(waveDate, '%m/%d') as waveDate, Upper(user) as user FROM `wholesaleData` ORDER BY waveNumber desc LIMIT 100"
      );
      console.log("got root");
      res.json(rows);
    } catch (error) {
      console.log(error);
    }
  },
  getWebRoot: async (req, res) => {
    try {
      const [rows] = await connectDB.query(
        "select whLocation, waveNumber, units, printed, date_format(date, '%m/%d') as waveDate, Upper(user) as user, comments FROM `webdata` ORDER BY waveNumber asc"
      );
      console.log(rows, "got web root");
      res.json(rows);
    } catch (error) {
      console.log(error);
    }
  },
  getOneWave: async (req, res) => {
    try {
      const [rows] = await connectDB.query(
        `select whLocation, waveNumber,customer,unitCount,date_format(startShip, '%m/%d') as startShip,      date_format(cancelDate, '%m/%d') as cancelDate,date_format(tenderDate, '%m/%d') as tenderDate,    date_format(shipDate, '%m/%d') as shipDate, printed, date_format(waveDate, '%m/%d') as waveDate, user FROM wave_release.wholesaledata WHERE(waveNumber = ${req.params.wave})`
      );
      console.log(rows);
      res.json(rows);
    } catch (error) {
      console.log(error);
    }
  },
  getCalendarData: async (req, res) => {
    try {
      //ship date data
      const [rows] = await connectDB.query(
        "select Concat(' ',customer,' [',SUM(unitCount),']') as title, date_format(shipDate, '%Y-%m-%d') as date, date_format(shipdate, '%Y-%m-%d') as DateShip, customer FROM wholesaledata Group BY customer, shipDate order by shipDate asc;"
      );
      //tender date pull
        //needs to be distinct/unique
      const [columns] = await connectDB.query(
        "select distinct Concat(customer,' ', date_format(shipDate, '%m-%d')) as title, date_format(tenderDate, '%Y-%m-%d') as date, tenderDate, date_format(shipdate, '%Y-%m-%d') as DateShip FROM wholesaledata Where Not (customer='Atlanta' OR customer='Orlando' OR customer='Palm Beach' OR customer='Houston' OR customer='Summit' OR customer='Saddle Creek' OR customer='South Park' OR customer='San Marcos'  OR customer='Newport' OR customer='Stores' OR customer='Fairhaven'OR customer='BLW Stores' ) order by tenderDate asc;"
      );

      const [tiers] = await connectDB.query("SELECT date_format(date, '%Y-%m-%d') as 'date', CONCAT('Webs [',SUM(units),']') as 'title' from webdata GROUP BY date;");

      const rowsU = rows.map(x => ({...x, color:'blue', url:`http://localhost:5173/dateCheck/${x.customer}/${x.DateShip}`}))
      const columnsU = columns.map(x => ({...x, color:'grey'}))
      const tiersU = tiers.map(x => ({...x, color:'green'}))
      const calendarData = [...rowsU, ...columnsU, ...tiersU]
      res.json(calendarData);
      console.log("got calendar root");
      console.log(
        rowsU, 
        // columnsU,
        // calendarData
        );
    } catch (error) {
      console.log(error);
    }
  },
  getUnscheduledWaves: async (req, res) => {
    try {
      const [rows] = await connectDB.query("select whLocation, waveNumber,customer,unitCount,date_format(startShip, '%m/%d') as startShip,      date_format(cancelDate, '%m/%d') as cancelDate,date_format(tenderDate, '%m/%d') as tenderDate,    date_format(shipDate, '%m/%d') as shipDate, printed, date_format(waveDate, '%m/%d') as waveDate, Upper(user) as user FROM `wholesaleData` WHERE tenderDate is NULL OR shipDate is NULL;")
      console.log('got unscheduled')
      
      res.json(rows)
      
    } catch (error) {
      console.log(error)
    }
  },
  getEventDataByWave: async (req, res) => {
    try {
      //finish this query
      console.log(req.params)
      const [wavesByEventData] = await connectDB.query(`select whLocation, date_format(waveDate, '%m/%d') as date, waveNumber,customer,unitCount,date_format(startShip, '%m/%d') as startShip, date_format(cancelDate, '%m/%d') as cancelDate,date_format(tenderDate, '%m/%d') as tenderDate, date_format(shipDate, '%m/%d') as shipDate, printed, user FROM wave_release.wholesaledata WHERE(customer = '${req.params.customer}' AND shipDate = '${req.params.shipDate}');`)
      console.log('got event wave data')
      res.json(wavesByEventData)

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

    const waveDateToAdd = updateDate(req.body.waveDate);
    try {

      const [rows] = await connectDB.query(
        `INSERT INTO wave_release.wholesaleData (whLocation, waveNumber, customer, unitCount, startShip, cancelDate, printed, waveDate, user) VALUES ('${
          req.body.waveLocation
        }', '${req.body.waveNumber}', '${req.body.waveCustomer}', '${
          req.body.waveCount
        }', '${startShipToAdd}', '${cancelDateToAdd}', '${req.body.wavePrinted}', '${waveDateToAdd}', '${req.body.waveUser.toUpperCase()}');`
      );

      res.json(rows);
    } catch (error) {
      console.log(error);
    }
  },
  addWebWave: async (req, res) => {
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
    const waveDateToAdd = updateDate(req.body.waveDate);
    try {
      console.log(req.body);
      const [rows] = await connectDB.query(
        `INSERT INTO wave_release.webdata (whLocation, date, user, waveNumber, units, comments, printed) VALUES ('${
          req.body.waveLocation
        }', '${waveDateToAdd}','${req.body.waveUser.toUpperCase()}','${
          req.body.waveNumber
        }','${req.body.waveCount}','${req.body.waveComment}','${
          req.body.wavePrinted
        }');`
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
    console.log(req.body);
    const startShipToEdit = updateDate(req.body.startShip);
    const cancelDateToEdit = updateDate(req.body.cancelDate);
    // const shipDateToEdit = updateDate(req.body.shipDate);
    // const tenderDateToEdit = updateDate(req.body.tenderDate);
    try {
      //debuggin
      console.log(req.body);
      //add the query
      //we want to select the correct wave from the request
      const [rows] = await connectDB.query(
        `UPDATE wave_release.wholesaledata SET whLocation = ${req.body.location}, waveNumber = ${req.body.wave}, customer = '${req.body.customer}', unitCount = ${req.body.units},startShip = '${startShipToEdit}', cancelDate = '${cancelDateToEdit}',
        user = '${req.body.user}' WHERE(waveNumber = ${req.body.wave});`
      );
      //update the line with all of the data from the request on each column
      //object is good to go
      res.json(rows);
      //take the object and query sql to take care of it
    } catch (error) {
      console.log(error);
    }
  },
  editCalendarWave: async (req, res) => {
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
    console.log(req.body);
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
        `UPDATE wave_release.wholesaledata SET waveNumber = ${req.body.wave}, customer = '${req.body.customer}', unitCount = ${req.body.units}, startShip = '${startShipToEdit}', cancelDate = '${cancelDateToEdit}', shipDate = '${shipDateToEdit}', tenderDate = '${tenderDateToEdit}' WHERE(waveNumber = ${req.body.wave});`
      );
      //update the line with all of the data from the request on each column
      //object is good to go
      res.json(rows);
      //take the object and query sql to take care of it
    } catch (error) {
      console.log(error);
    }
  },
  updateShipDates: async (req, res) => {
    const { tenderDate, shipDate, toUpdate } = req.body
    const waveListToUpdate = `waveNumber = ${toUpdate.join(' OR waveNumber = ')}`

    //help Debug
    // console.log(tenderDate, shipDate, toUpdate, waveListToUpdate)

    try {
      const [rows] = await connectDB.query(`UPDATE wholesaledata SET tenderDate = '${tenderDate}', shipDate = '${shipDate}' WHERE ${waveListToUpdate}`)
      console.log('updated')
      res.json(rows)
    } catch (error) {
      console.log(error)
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
  deleteWebWave: async (req, res) => {
    console.log(req.params.wave);
    try {
      const [rows] = await connectDB.query(
        `DELETE FROM webdata WHERE (waveNumber = '${req.params.wave}');`
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
  editWebWavePrinted: async (req, res) => {
    const waveToUpdate = req.params.wave;
    const newPrinted = req.params.oldPrinted === "N" ? "Y" : "N";
    try {
      console.log(waveToUpdate, newPrinted);
      const [rows] = await connectDB.query(
        `UPDATE webdata SET printed = '${newPrinted}' WHERE (waveNumber = '${waveToUpdate}');`
      );
      res.json(rows);
    } catch (error) {
      console.log(error);
    }
  },
};
