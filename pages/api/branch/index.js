export async function getBranchs() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/professions`)
    const jsonData = await response.json()
    return jsonData
}

export default async function handler(req, res) {
    const jsonData = await getBranchs()
    res.status(200).json(jsonData)
}