
export const deleteSelectedWave = async (waveToDelete) => {
  try {
    const res = await fetch(`http://localhost:3000/delete/${waveToDelete}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const updateWavePrinted = async (waveToUpdate, oldPrinted) => {
  try {
    const res = await fetch(
      `http://localhost:3000/updatePrinted/${waveToUpdate}/${oldPrinted}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const getSingleWaveData = async (wave) => {
  try {
    const res = await fetch(`http://localhost:3000/getOneWave/${wave}`);
    return res
  } catch (error) {
    console.log(error);
  }
};

export const editWave = async (
  location,
  user,
  wave,
  customer,
  units,
  startShip,
  cancelDate,
  tenderDate,
  shipDate,
) => {
  const waveUpdate = {
    location: location,
    user: user,
    wave: wave,
    customer: customer,
    units: units,
    startShip: startShip,
    cancelDate: cancelDate,
    tenderDate: tenderDate,
    shipDate: shipDate,
  };
  try {
    const res = await fetch("http://localhost:3000/editWave", {
      method: "PUT",
      body: JSON.stringify(waveUpdate),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const newData = await getSingleWaveData(waveUpdate.wave)
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const copyWaveLine = (
  location,
  wave,
  customer,
  units,
  startShip,
  cancelDate,
  tenderDate,
  shipDate,
  user
) => {
  setFormData((prevState) =>  {
    return {
      ...prevState,
      waveLocation: location,
      waveNumber: wave,
      waveCustomer: customer,
      waveCount: units,
      waveStartShip: startShip,
      waveCancelDate: cancelDate,
      waveTenderDate: tenderDate,
      waveShipDate: shipDate,
      waveUser: user,
    }
  });
  
};