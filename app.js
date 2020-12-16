const express = require("express");

const DB = require("./models/dbConnect");
const dbConnect = require("./models/dbConnect");
require("dotenv").config();

const router = require("./routers/router");


//server
const app = express();
const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`I'm listening on port ${port}`);
});

//connect db
dbConnect();

//middleware
app.use(express.json());
app.use("/api", router);
