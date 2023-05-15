const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

connectDB();

app.use(express.json());

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.engine("jsp", (filePath, options, callback) => {
  jsp.renderFile(filePath, options, (err, html) => {
    if (err) return callback(err);
    return callback(null, html);
  });
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jsp");

app.use(cors(corsOptions));

app.use("/api/users", require("./Routes/api/users"));
app.use("/api/auth", require("./Routes/api/auth"));
app.use("/api/profile", require("./Routes/api/profile"));
app.use("/api/posts", require("./Routes/api/posts"));
app.use("/api/orgs", require("./Routes/api/org"));
app.use("/api/returns", require("./Routes/api/returns"));

app.get("/", (req, res) => {
  res.send("hoila");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("`client/build`"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
