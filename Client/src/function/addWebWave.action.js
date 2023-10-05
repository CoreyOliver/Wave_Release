export async function action({ request }) {
  const formData = await request.formData();
  const waves = Object.fromEntries(formData);
  console.log(waves);
  if (
    waves.waveCount !== "" &&
    waves.waveLocation !== "" &&
    waves.waveNumber !== "" &&
    waves.waveUser !== ""
  ) {
    try {
      const response = await fetch("http://localhost:3000/add/web", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(waves),
      });
      const body = await response.json();
      // location.reload();

      return { body };
    } catch (error) {
      console.log(error);
      return null
    }
  } else {
    alert('please fill all values')
    return null
  }
  //add some check
  //make sure none of the empties are empty else throw an error
}
