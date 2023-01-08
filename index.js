const express = require("express");
const app = express();
const port = process.argv[2];

app.use(express.json());

// middleware : a function that can modify request and can send response
function sohan(req, res, next) {
  console.log("middleware function"); //will run before the main function and main function will not be executed
}

function secret(req, res, next) {
  //   console.log(req.headers);
  if (req.headers.sohan === "sohan@000") next();
  else res.send("unauthorized");
}

// app.use(sohan); //middleware will be applied to all routes

app.get("/page1", (req, res) => {
  res.send("page1");
});

app.get("/page2", (req, res) => {
  res.send("page2");
});

app.get("/page3", [sohan, secret], (req, res) => {
  res.send("page3");
});

app.get("/", sohan, (req, res) => {
  console.log("main function");
  res.send("home");
});

app.get("/test", (req, res) => {
  res.send("sohan");
});

app.get("/secret", secret, (req, res) => {
  res.send("secret");
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log("server is running successfully on PORT : " + port);
});
