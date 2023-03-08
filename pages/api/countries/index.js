export async function getCountries() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/countries`)
    const jsonData = await response.json()
    return jsonData
}

export default async function handler(req, res) {
    const jsonData = await getCountries()
    res.status(200).json(jsonData)
}