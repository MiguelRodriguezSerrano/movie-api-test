const express = require("express");

const PORT = 3000;
//const HOST = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
  console.log("Request", req);
  res.send("Hello world\n");
});

app.listen(PORT, () => console.log(`Running on port 3000`));
