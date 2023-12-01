const ENDPOINT = 'http://localhost:3501/api/auth'

function signin  ({username, password}) {
    return fetch(`${ENDPOINT}/register`, {
        method: 'POST',
        mode: 'cors',
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
export default signin;