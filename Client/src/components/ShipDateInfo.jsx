import { useState } from "react";
import { useLoaderData, Form } from "react-router-dom";
import WholesaleWave from "./WholesaleWave";

import { deleteSelectedWave, editWave } from "../function/waveUpdate";

export async function loader({ customer, shipDate }) {
  console.log(customer, shipDate);
  const res = await fetch(
    `http://localhost:3000/dateCheck/${customer}/${shipDate}`
  );
  const wavesToShow = await res.json();
  return wavesToShow;
}

const ShipDateInfo = () => {
  const wavesList = useLoaderData();
  const [waveData, setWaveData] = useState(wavesList);

  const customerDateList = waveData.map((x) => ` ${x.waveNumber},`);
  const calendarWavesList = waveData.map((wave) => (
    <WholesaleWave
      key={wave.waveNumber}
      location={wave.whLocation}
      date={wave.date}
      wave={wave.waveNumber}
      customer={wave.customer}
      units={wave.unitCount}
      startShip={wave.startShip}
      cancelDate={wave.cancelDate}
      tenderDate={wave.tenderDate}
      shipDate={wave.shipDate}
      printed={wave.printed}
      user={wave.user}
      deleteSelectedWave={deleteSelectedWave}
      editWave={editWave}
    />
  ));

  console.log(waveData)
  console.log(calendarWavesList);

  return (
    <div className="pt-32 flex-col px-8 mx-auto">
      <div className="flex justify-around mb-8">
        <h2 className="px-8 pr-16">{waveData[0].customer}</h2>
        <h2 className="px-8 pl-16 ">{waveData[0].shipDate}</h2>
      </div>
      <div>
        <div className="flex-wrap border-gray-600 border-solid border-2">
          {customerDateList}
        </div>
        <div className="pt-32 flex justify-center items-center px-8 mx-auto">
          <Form method="POST" id="wholesaleAddForm" className="pb-8">
            <table className="table mx-4 mt-4 pb-8">
              <thead>
                <tr className="">
                  <th
                    scope="col"
                    className="mx-2 px-4 bg-orange-400 border-slate-600"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="mx-2 px-2 bg-blue-400 border-slate-600 hidden md:table-cell"
                  >
                    WH
                  </th>
                  <th
                    scope="col"
                    className="mx-2 px-4 bg-yellow-400 border-slate-600 hidden md:table-cell"
                  >
                    Waver
                  </th>
                  <th
                    scope="col"
                    className="mx-2 px-4 bg-pink-400 border-slate-600"
                  >
                    Wave
                  </th>
                  <th
                    scope="col"
                    className="mx-2 px-4 bg-indigo-400 border-slate-600"
                  >
                    Account
                  </th>
                  <th
                    scope="col"
                    className="mx-2 px-4 bg-green-400 border-slate-600"
                  >
                    Units
                  </th>
                  <th
                    scope="col"
                    className="mx-2 px-4 bg-red-400 border-slate-600"
                  >
                    Start Ship
                  </th>
                  <th
                    scope="col"
                    className="mx-2 px-4 bg-red-400 border-slate-600"
                  >
                    Cancel Date
                  </th>
                  <th
                    scope="col"
                    className="mx-2 px-4 bg-orange-400 border-slate-600"
                  >
                    Printed
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* <tr className="">
                  <th
                    scope="col"
                    className="sm:text-xs xl:text-sm mx-2 px-4 bg-orange-300"
                  >
                    <input
                      className="w-24 text-xs text-center"
                      type="text"
                      placeholder="Date"
                      name="waveDate"
                      value={formData.waveDate}
                      onChange={(e) => handleChange(e)}
                      autoComplete="off"
                    />
                  </th>
                  <th
                    scope="col"
                    className="sm:text-xs xl:text-sm mx-2 px-4 bg-blue-300"
                  >
                    <input
                      className="w-24 text-xs text-center"
                      type="list"
                      list="locations"
                      placeholder="WH"
                      name="waveLocation"
                      value={formData.waveLocation}
                      onChange={(e) => handleChange(e)}
                      autoComplete="off"
                    />
                  </th>
                  <th
                    scope="col"
                    className="sm:text-xs xl:text-sm mx-2 px-4 bg-yellow-300 hidden md:table-cell"
                  >
                    <input
                      className="w-24 text-xs text-center"
                      type="text"
                      placeholder="Waver"
                      name="waveUser"
                      value={formData.waveUser}
                      onChange={(e) => handleChange(e)}
                      autoComplete="off"
                    />
                  </th>
                  <th
                    scope="col"
                    className="sm:text-xs xl:text-sm mx-2 px-4 bg-pink-300"
                  >
                    <input
                      className="w-24 text-xs text-center"
                      type="text"
                      placeholder="Wave Number"
                      name="waveNumber"
                      value={formData.waveNumber}
                      onChange={(e) => handleChange(e)}
                      autoComplete="off"
                    />
                  </th>
                  <th
                    scope="col"
                    className="sm:text-xs xl:text-sm mx-2 px-4 bg-indigo-300"
                  >
                    <input
                      className="w-24 text-xs text-center"
                      type="list"
                      list="customers"
                      placeholder="Customer"
                      name="waveCustomer"
                      value={formData.waveCustomer}
                      onChange={(e) => handleChange(e)}
                      autoComplete="off"
                    />
                  </th>
                  <th
                    scope="col"
                    className="sm:text-xs xl:text-sm mx-2 px-4 bg-green-300"
                  >
                    <input
                      className="w-24 text-xs text-center"
                      type="text"
                      placeholder="Unit Count"
                      name="waveCount"
                      value={formData.waveCount}
                      onChange={(e) => handleChange(e)}
                      autoComplete="off"
                    />
                  </th>
                  <th
                    scope="col"
                    className="sm:text-xs xl:text-sm mx-2 px-4 bg-red-300"
                  >
                    <input
                      className="w-24 text-xs text-center"
                      type="text"
                      placeholder="Start Ship"
                      name="waveStartShip"
                      value={formData.waveStartShip}
                      onChange={(e) => handleChange(e)}
                      autoComplete="off"
                    />
                  </th>
                  <th
                    scope="col"
                    className="sm:text-xs xl:text-sm mx-2 px-4 bg-red-300"
                  >
                    <input
                      className="w-24 text-xs text-center"
                      type="text"
                      placeholder="Cancel Date"
                      name="waveCancelDate"
                      value={formData.waveCancelDate}
                      onChange={(e) => handleChange(e)}
                      autoComplete="off"
                    />
                  </th>
                  <th
                    scope="col"
                    className="sm:text-xs xl:text-sm mx-2 px-4 bg-orange-300"
                  >
                    <input
                      className="w-24 text-xs text-center"
                      type="text"
                      placeholder="Printed"
                      name="wavePrinted"
                      value={formData.wavePrinted}
                      onChange={(e) => handleChange(e)}
                      autoComplete="off"
                    />
                  </th>
                </tr> */}
                {calendarWavesList}
              </tbody>
            </table>
          </Form>

          <datalist id="locations">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </datalist>

          <datalist id="customers">
            <option value="Dillards">Dillards</option>
            <option value="Belk">Belk</option>
            <option value="Macys">Macys</option>
            <option value="AAFES">AAFES</option>
            <option value="Zappos">Zappos</option>
            <option value="Marine">Marine</option>
            <option value="Navy Exchange">Navy Exchange</option>
            <option value="Saddle Creek">Saddle Creek</option>
            <option value="Summit">Summit</option>
            <option value="Atlanta">Atlanta</option>
            <option value="San Marcos">San Marcos</option>
            <option value="Fairhaven">Fairhaven</option>
            <option value="Houston">Houston</option>
            <option value="Newport">Newport</option>
            <option value="South Park">South Park</option>
            <option value="Orlando">Orlando</option>
            <option value="Palm Beach">Palm Beach</option>
            <option value="BLW Stores">BLW Stores</option>
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default ShipDateInfo;
