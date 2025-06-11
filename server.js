const express = require("express");
const mongoose = require("mongoose");
const expenseRoutes = require("./routes/routes");

//Create express server
const app = express();
app.use(express.json()); //middleware that allows jsons to be created
app.use("/expense", expenseRoutes);

const uri = "mongodb://localhost:27017/expensedb";
const port = 3000;

//Mongo db connection

mongoose
  .connect(uri)
  .then(() => console.log("Connected to mongodb sucessfully"))
  .then((error) => console.error("Failed to connect to mongo db", err));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
