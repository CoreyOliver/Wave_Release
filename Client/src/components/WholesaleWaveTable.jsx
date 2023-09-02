import WholesaleWave from "./WholesaleWave";

import { useLoaderData, Form } from "react-router-dom";
import { useState, useEffect } from "react";

export async function loader() {
  const res = await fetch("http://localhost:3000");
  const waves = await res.json();
  return waves;
}

const WholesaleWaveTable = () => {
  const waves = useLoaderData();
  const [waveData, setWaveData] = useState(waves);
  const [formData, setFormData] = useState({
    waveDate: new Date().toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
    }),
    waveLocation: "",
    waveUser: "",
    waveNumber: "",
    waveCustomer: "",
    waveCount: "",
    waveStartShip: "",
    waveCancelDate: "",
    waveTenderDate: "",
    waveShipDate: "",
    wavePrinted: "N",
  });

  const deleteSelectedWave = async (waveToDelete) => {
    try {
      const res = await fetch(`http://localhost:3000/delete/${waveToDelete}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      })
      const data = await res.json()
      location.reload()
      
    } catch (error) {
      console.log(error)
    }
  };
  const wholesaleWavesToList = waveData.map((wave) => (
    <WholesaleWave
      key={wave.waveNumber}
      location={wave.whLocation}
      date={wave.waveDate}
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
    />
  ));

  // useEffect(() => console.log(formData), [formData]);

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="pt-32 flex justify-center items-center px-8 mx-auto">
      <Form method="POST" id="wholesaleAddForm" className="">
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
              <th scope="col" className="mx-2 px-4 bg-red-400 border-slate-600">
                Start Ship
              </th>
              <th scope="col" className="mx-2 px-4 bg-red-400 border-slate-600">
                Cancel Date
              </th>
              <th
                scope="col"
                className="mx-2 px-4 bg-purple-400 border-slate-600"
              >
                Tender Date
              </th>
              <th
                scope="col"
                className="mx-2 px-4 bg-purple-400 border-slate-600"
              >
                Ship Date
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
            {wholesaleWavesToList}
            <tr className="">
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
                className="sm:text-xs xl:text-sm mx-2 px-4 bg-purple-300"
              >
                <input
                  className="w-24 text-xs text-center"
                  type="text"
                  placeholder="Tender Date"
                  name="waveTenderDate"
                  value={formData.waveTenderDate}
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                />
              </th>
              <th
                scope="col"
                className="sm:text-xs xl:text-sm mx-2 px-4 bg-purple-300"
              >
                <input
                  className="w-24 text-xs text-center"
                  type="text"
                  placeholder="Ship Date"
                  name="waveShipDate"
                  value={formData.waveShipDate}
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
            </tr>
            <tr className="flex items-center">
              <th className="w-full">
                <button className="p-2 rounded-lg hover:scale-110 hover:ease-in text-xs">
                  Add
                </button>
              </th>
            </tr>
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
      </datalist>
    </div>
  );
};

export default WholesaleWaveTable;
