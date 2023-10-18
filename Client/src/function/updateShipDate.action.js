export async function action( {request } ) {
    const formData = await request.formData()
    const wavesToUpdateR = Object.fromEntries(formData)
    wavesToUpdateR.toUpdate = wavesToUpdateR.toUpdate.split(',')
    console.log(wavesToUpdateR)
    if(
        wavesToUpdateR.tenderDate !== "" &&
        wavesToUpdateR.shipDate !== "" &&
        wavesToUpdateR.toUpdate !== "" 
    ) {
        try {
            const response = await fetch("http://localhost:3000/addDates/WS", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(wavesToUpdateR),
              });
              const body = await response.json();
              location.reload();
        
              return { body };
        } catch (error) {
            console.log(error)
            return null
        }
    }
    else {
        alert('please make some selections')
        return null
    }
}