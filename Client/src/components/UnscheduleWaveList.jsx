//components to bring in
import UnscheduledWholesaleWave from "./UnscheduledWholesaleWave"

//init
import { useLoaderData, Form } from "react-router-dom";
import { useState, useEffect } from "react";

export async function loader() {
  const res = await fetch("http://localhost:3000/unsWaves");
  const unscheduledWavesData = await res.json();
  return unscheduledWavesData;
}
const UnscheduleWaveList = () => {
  const unscheduledWaves = useLoaderData();
  const [wavesToSchedule, setWavesToSchedule] = useState(unscheduledWaves);

  useEffect(() => {
    console.log(wavesToSchedule);
  }, []);

  const unscheduledWavesToList = wavesToSchedule.map((wave) => (
    <UnscheduledWholesaleWave
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
    />
  ));

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
            </tr>
          </thead>
          <tbody>
            {unscheduledWavesToList}
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
                  value="placeholder"
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
                  value="placeholder"
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
                  value="placeholder"
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
                  value="placeholder"
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
                  value="placeholder"
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
                  value="placeholder"
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
                  value="placeholder"
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
                  value="placeholder"
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
                  value="placeholder"
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                />
              </th>
            </tr> */}
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
    </div>
  );
};

export default UnscheduleWaveList;
