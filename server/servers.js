const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// app
const app = express();

const DB =
  process.env.MONGODB_URI ||
  process.env.DATABASE ||
  "mongodb+srv://sam:asmara@cluster0.yba8p.mongodb.net/mekele?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// middlewares
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// port
const port = process.env.PORT || 8000;
// const reactPath = path.resolve(__dirname, "..", "..", "my-app", "build");
// //console.log(reactPath);
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }
const pathBuild = path.resolve(__dirname, "..", "client", "build");
console.log(pathBuild);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(pathBuild));
}

console.log("lkl");
app.get("/", (req, res) => {
  console.log("home");
  res.send("HOME PAGE");
});
app.post("/hello", (req, res) => {
  console.log(req.body);
  res.send("HELLO HELLO HELLO");
});
app.get("/bye", (req, res) => {
  console.log("BYE Bye");
  res.send("BYE BYE BYE BYE");
});

//console.log(pathBuild);

app.listen(port, () => console.log(`Server is running good on port ${port}`));
