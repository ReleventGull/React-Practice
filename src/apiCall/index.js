const BASE_URL = 'http://localhost:4000'

export const createUser = async (username, password) => {
const response = await fetch(`${BASE_URL}/api/users/signup`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    username, password
    })
})
    const result = await response.json()
    console.log("Result from createuser:", result)
    return result
}


export const signIn = async (username, password) => {
    const response = await fetch(`${BASE_URL}/api/users/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    username, password
    })
    })
    const result = await response.json()
    console.log("Result from sign in here:", result)
    return response
}
