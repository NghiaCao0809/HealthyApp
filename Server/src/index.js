const express = require('express');
const initialRoutes = require('./routes');
const cors = require('./config/cors');
require('dotenv').config();
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

db.connect();

app.use(express.json());
app.use(cors);

initialRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});

// const express = require('express');
// const initialRoutes = require('./routes');
// const cors = require('./config/cors');
// const dotenv = require("dotenv");  //require dotenv package
// dotenv.config({ path: "./config.env" }); //import config.env file

// const DB = process.env.DATABASE;  
// const Port = process.env.PORT || 5000;

// mongoose.connect(DB, {
//     usenewurlparser: true,
//     useunifiedtopology: true,
//   })
//   .then(() => {
//     console.log("Successfully connected ");
//   })
//   .catch((error) => {
//     console.log(`can not connect to database, ${error}`);
//   });