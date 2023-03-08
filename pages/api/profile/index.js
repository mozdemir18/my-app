export async function getUsers() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/profile`)
    const jsonData = await response.json()
    return jsonData
}

export default async function handler(req, res) {
    const { method } = req;
    if (method === "GET") {
        const jsonData = await getUsers()
        res.status(200).json(jsonData)
    }
}