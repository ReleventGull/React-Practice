const {Client} = require('pg')
const client = new Client('postgres://localhost:5432/users')




const createUser = async ({username, password}) => {
    console.log("Am I called")
    try {
        console.log("Creating User...")
        const {rows: [user]} = await client.query(`
        INSERT INTO users (username, password) 
        VALUES ($1, $2)
        RETURNING *;
        `, [username, password])
        console.log("User successfully created:", user)
        return user
    }catch(error) {
        console.log("There was an error creating the user!")
        throw error
    }
}

const getAllUsers = async() => {
    try {
    const {rows: users} = await client.query(`
    SELECT * FROM users;
    `)
    console.log("All users:", users)
    return users
    }catch(error) {
        console.log("There was an error getting al the users")
        throw error
    }
}

const getUserByUsername = async(username) => {
    try {
        const {rows: [user]} = await client.query(`
        SELECT username FROM users
        WHERE username=$1;
        `, [username])
        return user
    }catch(error) {
        console.log("There was an error grabbing the user by username")
        throw error
    }
}



module.exports = {
    client,
    createUser,
    getUserByUsername,
    getAllUsers
}

















