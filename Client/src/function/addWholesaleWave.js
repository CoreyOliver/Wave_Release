

export async function action({ request }) {
    const formData = await request.formData()
    const waves = Object.fromEntries(formData)
    console.log(waves)
    const response = await fetch("http://localhost:3000/addWS", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(waves)
    })
    // const body = await response.json()
    // console.log(body)
    return { body }
}