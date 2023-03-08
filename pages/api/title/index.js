export async function getTitles() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/title_names`)
    const jsonData = await response.json()
    return jsonData
}

export default async function handler(req, res) {
    const { method } = req;
    if (method === "GET") {
        const jsonData = await getTitles()
        res.status(200).json(jsonData)
    }
}