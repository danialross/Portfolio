const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(
  cors({
    origin: ["https://danialross.github.io/Portfolio"],
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/files", express.static(path.join(__dirname, "files")));

app.get("/api/home", (req, res) => {
  res.send("Welcome Home!");
});

module.exports = app;
