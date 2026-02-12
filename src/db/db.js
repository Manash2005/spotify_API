const mongoose = require("mongoose")
require("colors")


async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected successfullyy".green)
    }
    catch(error){
        console.log("Database Connection Error", error)
        process.exit(1)
    }
}

module.exports = connectDB