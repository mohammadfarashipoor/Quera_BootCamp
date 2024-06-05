const express = require("express");
const fs = require("fs");
const Auth = require("./utils/auth.js");
const cors = require("cors");
require("./utils/db");

const app = express();
const PORT = process.env.PORT || 3001;
const { ACCESS_TOKEN } = process.env;
const auth = new Auth(ACCESS_TOKEN);

app.use(cors());
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

fs.readdirSync("controllers")
  .map((x) => `./controllers/${x}`)
  .forEach((module) => {
    try {
      require(module)({ app, auth });
      console.log(`✔️ ${module}`);
    } catch (err) {
      console.log("-".repeat(128));
      console.log(`x ${module}`);
      console.log(err);
      console.log("-".repeat(128));
    }
  });
