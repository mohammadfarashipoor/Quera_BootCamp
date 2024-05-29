const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
require('./utils/db');

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
