const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["https://danialross.vercel.app"],
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => {
  res.send({ message: "Resume Serving API for Danial Ross Portfolio Website" });
});

app.use("/get-resume", express.static(path.join(__dirname, "files")));

module.exports = app;
