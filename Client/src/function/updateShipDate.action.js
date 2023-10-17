export async function action( {request } ) {
    const formData = await request.formData()
    const wavesToUpdateR = Object.fromEntries(formData)
    wavesToUpdateR = {
        ...wavesToUpdateR,
        //make this an array
        toUpdate.join('')
    }
    console.log(wavesToUpdateR)
    if(
        wavesToUpdateR.tenderDate !== "" &&
        wavesToUpdateR.shipDate !== "" &&
        wavesToUpdateR.toUpdate !== "" 
    )
    return null
}