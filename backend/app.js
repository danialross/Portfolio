const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(
  cors({
    origin: ["https://danialross.vercel.app"],
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/files", express.static(path.join(__dirname, "files")));

module.exports = app;
