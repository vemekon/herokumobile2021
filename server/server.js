const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
const path = require("path");

require("dotenv").config();

// app
const app = express();

const DB =
  process.env.MONGODB_URI ||
  process.env.DATABASE ||
  "mongodb+srv://sam:asmara@cluster0.e9zzy.mongodb.net/adwa?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

const apath = path.resolve(__dirname, "..", "client/build");
console.log(apath);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(apath));
}

const routepath = path.resolve(__dirname, "routes");
console.log(routepath, "routepath");
readdirSync(routepath).map((r) => app.use("/api", require("./routes/" + r)));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is running on port ${port}`));
