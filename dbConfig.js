const mongoose = require('mongoose')

async function initDB() {

    try{
        await mongoose.connect( process.env.MONGO_URL, { dbName:'Instagram' })
        console.log("connected db successfully")
    } catch{
        console.log("erorr connecting to db")
        process.exit()
    }
}

module.exports = {
    initDB
}