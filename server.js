const express = require("express");

const app = express();

app.length("/", (req, res) => res.send("Hello World"));

app.listen(3000, () => console.log("Ready on port 3000!"));
