const {
client,
createUser,
getAllUsers,
createClothing,
getAllClothing
} = require('./index')

const shopItems = require('./shop')

const droptables = async () => {
    try {
        console.log("Dropping tables...")
        await client.query(`
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS clothing;
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
        );
        CREATE TABLE clothing (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        price INTEGER NOT NULL,
        img text NOT NULL
        );
        `)
        console.log("Create tables complete.")
    }catch(error) {
        console.log("There was an error creating the tables!")
        throw error
    }
}

const createInitalUsers = async () => {
    await createUser({username: "Jaron", password: "Bruh"})
}
const createShopItems = async () => {
shopItems.forEach(async (item) => await createClothing({name: item.name, price:item.price, img:item.img}))
}


const rebuildDb = async () => {
     client.connect()
     await droptables()
     await createTables()
     await createInitalUsers()
     await getAllUsers()
    await createShopItems()
    await getAllClothing()
}
rebuildDb()