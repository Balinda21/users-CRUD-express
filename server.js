const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
  .connect(
    "mongodb+srv://balinda:Famillyy123@cluster0.8izzdgk.mongodb.net/Eclipse"
  )
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", routes);
    app.listen(3000, () => console.log("connected to database successfully"));
  })
  .catch((error) => console.log(error));
