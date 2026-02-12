require("dotenv").config()
const app = require("./src/app.js")
const colors = require("colors")
const connectDB = require("./src/db/db.js")


connectDB()

app.listen(3000, () => {
    console.log("Server is running at PORT 3000".blue)
})