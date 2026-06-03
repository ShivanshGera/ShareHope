

require("dotenv").config();
const PORT = process.env.PORT || 5000;


const app = require("./src/app");
const dbConnect = require("./src/config/database")

if (!process.env.JWT_SECRET) {
    console.error("Missing required environment variable: JWT_SECRET");
    process.exit(1);
}

dbConnect();



app.listen(PORT, () =>{
    console.log(`successfully started at port ${PORT}`);
})
