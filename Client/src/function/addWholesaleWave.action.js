

export async function action({ request }) {
    const formData = await request.formData()
    const waves = Object.fromEntries(formData)
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