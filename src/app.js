const yargs = require("yargs");
// imports yargs
const {client, connection} = require ("./db/connection");
// imports client and connection from connection.js
const Movie = require("./utils/index")

async function app (yargsInput) {
    const collection = await connection();
    try {
        if (yargsInput.create) {
            console.log("start create");
            const movie = new Movie(yargsInput.title, yargsInput.actor);
            await movie.create(collection);
            console.log("successfully added");

        } else if (yargsInput.read) {
            const movie = new Movie(yargsInput.title, yargsInput.actor);
            console.table(await movie.read(collection));
        } else {
            console.log("command not recognized")
        }
        await client.close();        
    } catch (error) {
        console.log(error);
        await client.close();
    }
}


app(yargs.argv)