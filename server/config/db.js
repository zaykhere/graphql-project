const mongoose = require("mongoose");

const connectDB = async function() {
    const conn = await mongoose.connect(process.env.DB_URL);

    console.log(`Mongodb connected ${conn.connection.host}`);
}

module.exports = connectDB;