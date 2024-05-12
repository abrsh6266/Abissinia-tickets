const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movie");
// admin/movie=>get
router.get("/movies", movieController.getMovies);
router.get("/movies/:movieId", movieController.getMovie);

module.exports = router;
