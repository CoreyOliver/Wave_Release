export const deleteSelectedWave = async (waveToDelete) => {
  try {
    const res = await fetch(`http://localhost:3000/delete/${waveToDelete}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const updateWavePrinted = async (waveToUpdate , oldPrinted) => {
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
    console.log(res)
    location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const editWave = (e) => {
  console.log(e, "edit wave");
};
