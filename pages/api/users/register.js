export async function save(req) {
    //const body = req.body;
    console.log(req);
    fetch("http://188.132.130.99/en/api/v1/auth/users/", {
      method: "POST",
      body: JSON.stringify({
        "name": "name"
      }),
      headers: {
        "content-type": "application/json",
      },
    }).catch((e) => console.log(e));
}

export default async function handler(req, res) {
    const jsonData = await searchDoctor(req)
    res.status(200).json(jsonData)
}