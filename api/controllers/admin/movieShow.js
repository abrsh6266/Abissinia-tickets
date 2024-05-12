const MovieShow = require("../../models/movieshow");

// Movie show schedule CRUD
exports.getMovieShows = (req, res) => {
  MovieShow.find()
    // .populate("movie")
    .then((movieshows) => {
      res.send(movieshows);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getMovieShow = (req, res) => {
  const movieShowId = req.params.movieShowId;
  MovieShow.findById(movieShowId)
    .then((movieshow) => {
      res.send(movieshow);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postMovieShow = (req, res) => {
  const showTime = req.body.showTime;
  const movieId = req.body.movieId;
  const hallId = req.body.hallId;

  const movieShow = new MovieShow(showTime, movieId, hallId);
  movieshow
    .save()
    .then((result) => {
      console.log("New Movie Show scheduled!");
      // res.redirect("/admin/movieshows"); //redirecting to te movie show lists
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getEditMovieShow = (req, res) => {
  const movieShowId = req.params.movieShowId;
  MovieShow.findById(movieShowId)
    .then((movieshow) => {
      if (!movieshow) return console.log("Incorrect movie show Id");
      res.send(movieshow);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postEditMovieShow = (req, res) => {
  const movieShowId = req.body.movieShowId;
  const updatedMovieId = req.body.movieId;
  const updatedHallId = req.body.hallId;

  MovieShow.findById(movieShowId)
    .then((movieshow) => {
      movieshow.movieId = updatedMovieId;
      movieshow.hallId = updatedHallId;

      return movieshow.save();
    })
    .then((updatedmovieshow) => {
      console.log("Schedule has been successfully updated");
      res.send(updatedmovieshow);
      // res.redirect("/admin/movieshow"); //redirecing to the movie shows list
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postDeleteMovieShow = (req, res) => {
  const movieShowId = req.params.movieShowId;
  movieShowId
    .findByIdAndDelete(movieShowId)
    .then((result) => {
      console.log("Movie show schedule has been deleted successfully!!");
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
