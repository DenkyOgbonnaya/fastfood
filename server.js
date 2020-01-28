"use strict";

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({ credentials: true }));

app.listen(PORT, err => {
  if (!err) console.log(`Server running on port ${PORT}`);
});
