const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost/your-database-name";
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    ["Tweet", "User"]
      .map((model) => ({
        [model]: require(`../models/${model}/model.js`),
      }))
      .reduce((p, c) => ({ ...p, ...c }), {});
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
