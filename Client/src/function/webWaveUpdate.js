
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
