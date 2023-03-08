export async function searchDoctor() {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}auth/profile`,
            {
                method: 'GET',
            }
        );
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export default async function handler(req, res) {
    const jsonData = await searchDoctor()
    res.status(200).json(jsonData)
}