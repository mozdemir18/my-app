export async function getCities() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/cities`)
    const jsonData = await response.json()
    return jsonData
}

export default async function handler(req, res) {
    const jsonData = await getCities()
    res.status(200).json(jsonData)
}