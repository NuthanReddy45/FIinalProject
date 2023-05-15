import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
ReactDOM.render(<App />, document.getElementById("root"));
