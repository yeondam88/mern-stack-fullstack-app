const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const port = process.env.PORT || 5000;

/* Initialize the App */
const app = express();

/* Body Parser middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* DB Config */
const db = require("./config/keys").mongoURI;
/* Connect to MongoDB  */
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected.."))
  .catch(err => console.error(err));

app.get("/", (req, res) => res.send("world"));

/* Use Routes */
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.listen(port, () => console.log(`The server is running at ${port}`));
