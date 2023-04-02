const express = require("express");
const app = express();
const indexRouter = require("./routers/indexRouter");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 5000;

const connect = require("./mongodb");
connect();

app.use(cors());

app.use(bodyParser.json({ limit: "50mb", extended: true }));

// app.get("/", (req, res) => {
//   res.json("Server WORKS!");
// });

app.use(express.json());
app.use(indexRouter);

app.listen(PORT, (req, res) => {
  console.log("Server is running at http://localhost:" + PORT);
});
