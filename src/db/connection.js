require ("dotenv").config();
// dotenv allows us to store secret login data in the .env file
const {MongoClient} = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

async function connection () {
    try {
        
        await client.connect();
        // we need to "connect" database. This like logging into the database and 
        // uses the login data we "hid" in the .env file
        console.log("client connected")

        const db = client.db("Movies");
        // this creates what mongo calls a collection (like a table) inside our database 
        return db.collection("Movie");

    } catch (error) {
        console.log(error)
    }
}

module.exports = {client, connection};