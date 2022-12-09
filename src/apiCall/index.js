const BASE_URL = 'http://localhost:4000'

export const getUserData = async (token) => {
    
   try {
    const response = await fetch(`${BASE_URL}/api/users`, {
        headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    const result = await response.json()
    console.log('The user is here', result)
    return result
   }catch(error) {
    throw error
   }
}

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
    return result
}

export const getClothing = async() => {
    const response = await fetch (`${BASE_URL}/api/clothing`, {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json'
        }
    })
    const result = await response.json()
    console.log('Results from clothing here', result)
    return result
}
