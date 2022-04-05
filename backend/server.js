const express               = require("express"),
      app                   = express(),
      react                  = require("react"),
      reactDOM               = require("react-dom"),
      bp                    = require("body-parser"),
      cors                  = require("cors"),
      path                  = require("path");

app.use(bp.urlencoded({extended: true}));
app.use(cors()); // allows cross origin requests, make more specific with a whitelist in time
app.set("views", path.join(__dirname, "../frontend/src/views"));

app.use(express.static(path.join(__dirname,"../frontend")));
app.use(express.static(path.join(__dirname, "../dist")));
app.use(express.json()) // IMPORTANT FOR AXIOS POST, took a long time to figure out, try got maybe

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("DATAVIZ ON 5000");
});
