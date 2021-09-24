//Connection to the Database
require("./db/connection");

//Express
const express = require("express");
const cors = require("cors");
const app = express();

//Routes
const userRouter = require("./user/user.routes")

//App.Use
app.use(express.json());
app.use(cors());
app.use(userRouter);

//Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});