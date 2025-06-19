const express = require("express");
const mongoose = require("mongoose");
const expenseRoutes = require("./routes/expenseRoutes.js");

//Create express server
const app = express();
app.use(express.json()); //middleware that allows jsons to be created
app.use("/expense", expenseRoutes);

const uri = "mongodb://localhost:27017/expensedb";
const port = 3000;

//Mongo db connection
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB sucessfully"))
  .catch((error) => console.error("Failed to connect to MongoDB", error));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
