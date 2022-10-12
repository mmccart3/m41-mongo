class Movie {
    constructor(title, actor = "Not specified") {
        this.title = title;
        this.actor = actor;
    }
    async create (collection) {
        await collection.insertOne(this)
    }

    async read (collection) {
        return await collection.find({}).toArray();
        
    }
}

module.exports = Movie;