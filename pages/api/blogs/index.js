export async function getBlogs() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blog/blog_list`)
    const jsonData = await response.json()
    return jsonData
}

export default async function handler(req, res) {
    const jsonData = await getBlogs()
    res.status(200).json(jsonData)
}