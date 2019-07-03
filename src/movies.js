const { Router } = require("express");
const router = Router();

//routes
router.get("/movies", (req, res) => {
  res.json(data);
});

module.exports = router;
