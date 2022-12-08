const {
client,
createUser,
getAllUsers
} = require('./index')

const droptables = async () => {
    try {
        console.log("Dropping tables...")
        await client.query(`
        DROP TABLE IF EXISTS users;
        `)
    }catch(error) {
        console.log("There was an error dropping the tables.")
        throw error
    }
}


const createTables = async () => {
    try {
        console.log("Creating Tables")
        await client.query(`
        CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL
        );`)
        console.log("Create tables complete.")
    }catch(error) {
        console.log("There was an error creating the tables!")
        throw error
    }
}

const createInitalUsers = async () => {
    await createUser({username: "Jaron", password: "Bruh"})
}


const rebuildDb = async () => {
     client.connect()
     await droptables()
     await createTables()
     await createInitalUsers()
     await getAllUsers()
}
rebuildDb()