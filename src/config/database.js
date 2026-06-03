const mongoose = require("mongoose");

const dbConnect = () => {
    const databaseUrl = process.env.DATABASE_URL || process.env.MONGO_URI;

    if (!databaseUrl) {
        console.error("Missing required environment variable: DATABASE_URL or MONGO_URI");
        process.exit(1);
    }

    mongoose.connect(databaseUrl)
    .then(()=>{
        console.log("database connected successfully");
    })
    .catch((error) =>{
        console.error(error.message);
        console.log("error in database connection");
        process.exit(1);
    })
}

module.exports = dbConnect;
