//components to bring in
import UnscheduledWholesaleWave from "./UnscheduledWholesaleWave";

//init
import { useLoaderData, Form } from "react-router-dom";
import { useState, useEffect } from "react";

//bring in functions
import { getCurrentDate } from "../function/waveUpdate";

//loader
export async function loader() {
  const res = await fetch("http://localhost:3000/unsWaves");
  const unscheduledWavesData = await res.json();
  return unscheduledWavesData;
}

const UnscheduleWaveList = () => {
  const unscheduledWaves = useLoaderData();

  //state to hold values from DB
  const [wavesToSchedule, setWavesToSchedule] = useState(unscheduledWaves);

  //state to hold values for req to DB
  const [wavesToUpdate, setWavesToUpdate] = useState({
    shipDate: getCurrentDate(),
    tenderDate: getCurrentDate(),
    toUpdate: [],
  });

  //debugging
  useEffect(() => {
    console.log(wavesToSchedule, wavesToUpdate);
  }, [wavesToUpdate]);

  //handle date changes
  const handleDateSelectChange = (e) => {
    setWavesToUpdate((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  //handle check change for selection
  const handleSelectionChange = (e) => {
    const waveToChange = e;
    if (!wavesToUpdate.toUpdate.includes(waveToChange)) {
      setWavesToUpdate((prevState) => {
        return {
          ...prevState,
          toUpdate: [...prevState.toUpdate, waveToChange],
        };
      });
    }
    else {
      setWavesToUpdate((prevState) => {
        return {
          ...prevState,
          toUpdate: [...prevState.toUpdate.filter(wave=> {
            wave != waveToChange
          })],
        };
      });
    }
    console.log(wavesToUpdate.toUpdate);
  };

  //map out the data into lines
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
      user={wave.user}
      handleSelectionChange={handleSelectionChange}
    />
  ));

  return (
    <div className="pt-32 flex justify-center items-center px-8 mx-auto flex-col">
      <Form
        method="POST"
        id="updateWaveForm"
        className="flex justify-around border-slate-600 border-solid border-2 shadow-xl shadow-slate-500 rounded-lg m-8 p-8"
      >
        <label className="w-26 pr-8 text-lg">
          Tender date:
          <input
            className="w-40 text-center text-black rounded-lg m-4 text-lg"
            type="date"
            value={wavesToUpdate.tenderDate}
            onChange={(e) => handleDateSelectChange(e)}
            name="tenderDate"
            autoComplete="off"
          ></input>
        </label>
        <label className="w-26 pr-8 text-lg">
          Ship Date:
          <input
            className="w-40 text-center text-black rounded-lg m-4 text-lg"
            type="date"
            value={wavesToUpdate.shipDate}
            onChange={(e) => handleDateSelectChange(e)}
            name="shipDate"
            autoComplete="off"
          ></input>
        </label>
        <button className="px-4 rounded-xl hover:scale-110 hover:ease-in text-sm">
          Add
        </button>
      </Form>
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
            <th scope="col" className="mx-2 px-4 bg-pink-400 border-slate-600">
              Wave
            </th>
            <th
              scope="col"
              className="mx-2 px-4 bg-indigo-400 border-slate-600"
            >
              Account
            </th>
            <th scope="col" className="mx-2 px-4 bg-green-400 border-slate-600">
              Units
            </th>
            <th scope="col" className="mx-2 px-4 bg-red-400 border-slate-600">
              Start Ship
            </th>
            <th scope="col" className="mx-2 px-4 bg-red-400 border-slate-600">
              Cancel Date
            </th>
            <th scope="col" className="mx-2 px-4 bg-lime-400 border-slate-600">
              Update
            </th>
          </tr>
        </thead>
        <tbody>{unscheduledWavesToList}</tbody>
      </table>
    </div>
  );
};

export default UnscheduleWaveList;
