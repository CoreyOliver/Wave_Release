

export async function action({ request }) {
    const formData = await request.formData()
    const waves = Object.fromEntries(formData)
    // const response = await fetch("", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(waves)
    // })
    // const body = await response.json()
    // console.log(body)
    console.log(waves)
    return { waves }
}