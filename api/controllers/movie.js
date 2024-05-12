const Movie = require("../models/movie");

exports.getMovies = (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.send(movies);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getMovie = (req, res, next) => {
  // movieId is from the front end anchor link
  const movieId = req.params.movieId;
  Movie.findById(movieId)
    .then((movie) => {
      if (!movie) return res.redirect("/");
      res.send(movie);
    })
    .catch((err) => {
      console.log(err);
    });
};
