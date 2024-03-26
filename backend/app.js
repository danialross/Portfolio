const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(
  cors({
    origin: "http://example.com",
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/files", express.static(path.join(__dirname, "files")));

app.get("/home", (req, res) => {
  res.send("Welcome Home!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
