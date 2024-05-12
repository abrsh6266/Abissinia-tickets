const Review = require("../../models/review");

exports.getReviews = (req, res) => {
  Review.find()
    .then((review) => {
      res.send(review);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getReview = (req, res) => {
  const reviewId = req.params.reviewId;
  Review.findById(reviewId)
    .then((review) => {
      res.send(review);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postReview = (req, res) => {
  const rating = req.body.rating;
  const comment = req.body.comment;
  const userId = req.body.userId;

  const review = new Review({ rating, comment, userId });
  review
    .save()
    .then((review) => {
      console.log("Review created successfully!!");
      res.send(review);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getEditReview = (req, res) => {
  const reviewId = req.params.reviewId;
  Review.findById(reviewId)
    .then((review) => {
      res.send(review);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postEditReview = (req, res) => {
  const reviewId = req.body.reviewId;
  const userId = req.body.userId;
  const updatedComment = req.body.comment;
  const updatedRating = req.body.rating;

  Review.findById(reviewId)
    .then((review) => {
      review.comment = updatedComment;
      review.rating = updatedRating;
      return review.save();
    })
    .then((updatedReview) => {
      res.send(updatedReview);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postDeleteReview = (req, res) => {
  const reviewId = req.params.reviewId;
  Review.findByIdAndDelete(reviewId)
    .then((deletedReview) => {
      console.log("Review Deleted!");
      res.send(deletedReview);
    })
    .catch((err) => {
      console.log(err);
    });
};
