

export async function action({ request }) {
    const formData = await request.formData()
    const waves = Object.fromEntries(formData)
    //add some check
        //make sure none of the empties are empty else throw an error
    console.log(waves)
    const response = await fetch("http://localhost:3000/add/WS", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(waves)
    })
    const body = await response.json()
    location.reload()

    return { body } 
}