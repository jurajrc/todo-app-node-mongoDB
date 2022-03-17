const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// connect to mongoose  // origo text // mongodb+srv://Juraj-rc:<password>@cluster0.w5bgz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://Juraj-rc:65F0VKpiNX6chgEd@cluster0.w5bgz.mongodb.net/noteDB");

// require route
app.use("/", require("./routes/noteRoute"));

app.listen(3001, function() {
    console.log("express server is running on port 3001");
})