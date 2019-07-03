const express = require("express");
const app = express();
const morgan = require("morgan");

//setings
app.set("port", process.env.PORT || 3000);

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Require Movies.json
const data = require("./database/movies");

//Routes
app.get("/movies", (req, res) => {
  res.json(data);
});

app.get("/movies/:id", function(req, res) {
  const movieId = req.params.id;
  const selectedMovie = data.find(index => index.id == movieId);
  res.send(selectedMovie);
});

//Starting server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
