const ENDPOINT = 'http://localhost:3501/api/auth'

export default function login ({username, password}) {
    return fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    }).then(res => {
        if(res.ok) throw new Error('Res is not good')
        return res.json()
    }).then(res => {
        const { jwt } = res
        return jwt
    })
}