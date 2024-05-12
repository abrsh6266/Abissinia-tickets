const Movie = require("../../models/movie");

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
exports.postAddMovie = (req, res, next) => {
  const { title, duration, genre, synopsis, country, releaseDate, poster } =
    req.body;
  const movie = new Movie({
    title,
    duration,
    synopsis,
    genre,
    country,
    releaseDate,
    poster,
  });
  movie
    .save()
    .then((result) => {
      console.log("Movie registered");
    })
    .catch((err) => {
      console.log(err);
    });

  res.send(movie);
};
// Fill Edit movie form
exports.getEditMovie = (req, res) => {
  const movieId = req.params._id;
  Movie.findById(movieId)
    .then((movie) => {
      // movie will be sent to the edditig form
      return res.send(movie);
    })
    .catch((err) => {
      console.log(err);
    });
};
// Register the editted movie on DB
exports.postEditMovie = (req, res, next) => {
  const movieId = req.body.movieId;
  const updatedTitle = req.body.title;
  const updatedDuration = req.body.duration;
  const updatedSynopsis = req.body.synopsis;
  const updatedCountry = req.body.country;
  const updatedGenre = req.body.genre;
  const updatedReleaseDate = req.body.releaseDate;
  const updatedPoster = req.body.poster;
  Movie.findById(movieId)
    .then((movie) => {
      movie.title = updatedTitle;
      movie.duration = updatedDuration;
      movie.synopsis = updatedSynopsis;
      movie.country = updatedCountry;
      movie.genre = updatedCountry;
      movie.genre = updatedGenre;
      movie.releaseDate = updatedReleaseDate;
      movie.poster = updatedPoster;

      return movie.save();
    })
    .then((result) => {
      console.log("Updated successfully!");
      res.send(result);
      //   res.redirect("/admin/movies");
    })
    .catch((err) => {
      console.log(err);
    });
};
// delete a movie
exports.postDeleteMovie = (req, res, next) => {
  const movieId = req.params.movieId;
  Movie.findByIdAndDelete(movieId)
    .then(() => {
      return res.redirect("/admin/movies");
    })
    .catch((err) => {
      console.log(err);
    });
};
