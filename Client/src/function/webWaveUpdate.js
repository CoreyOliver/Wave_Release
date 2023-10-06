
export const deleteSelectedWebWave = async (waveToDelete) => {
  try {
    const res = await fetch(`http://localhost:3000/deleteWebWave/${waveToDelete}`, {
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

export const updateWebWavePrinted = async (waveToUpdate, oldPrinted) => {
  try {
    const res = await fetch(
      `http://localhost:3000/updateWebPrinted/${waveToUpdate}/${oldPrinted}`,
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

