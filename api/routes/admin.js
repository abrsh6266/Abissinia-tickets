const express = require("express");
const router = express.Router();

const MovieController = require("../controllers/admin/movie");
const HallController = require("../controllers/admin/hall");
const MovieShowController = require("../controllers/admin/movieShow");
const BookingController = require("../controllers/admin/booking");
const SnackController = require("../controllers/admin/snack");
const StarController = require("../controllers/admin/star");
const ReviewController = require("../controllers/admin/review");
const OrderController = require("../controllers/admin/order");
const UserController = require("../controllers/admin/user");

const { protect } = require("../middleware/auth");

// MOVIES ROUTE

// User Routes
router.get("/users", protect, UserController.getUsers);
router.get("/users/:userId", UserController.getUser);
// router.post("/users", UserController.postUsers);
router.get("/edit-users/:userId", UserController.getUser);
router.post("/edit-users", UserController.postEditUsers);
router.post("/delete-users/:userId", UserController.postDeleteUsers);

// admin/movies=>get
router.get("/movies", MovieController.getMovies);
router.get("/movies/:movieId", MovieController.getMovie);
// admin/movies=>post
router.post("/add-movie", MovieController.postAddMovie);
// fetch the movie to be eddited
router.get("/edit-movies/:movieId", MovieController.getMovie);
// register the editted movie to the DB
router.post("/edit-movies", MovieController.postEditMovie);
router.post("/delete-movies/:movieId", MovieController.postDeleteMovie);

// HALLS ROUTE
// admin/halls=>get
router.get("/halls", HallController.getHalls);
router.get("/halls/:hallId", HallController.getHall);
// admin/add-halls=>post
router.post("/add-hall", HallController.postAddHall);
router.get("/edit-halls/:hallId", HallController.getEditHall);
router.post("/edit-halls", HallController.postEditHall);
router.post("/delete-halls/:hallId", HallController.postDeleteHall);

//Booking Routes
router.get("/tickets", BookingController.getBookedTickets);
router.get("/ticket", BookingController.getBookedTicket);
router.post("/tickeets", BookingController.postBooking);
router.get("/edit-tickets/:ticketId", BookingController.getEditBooking);
router.post("/edit-tickets", BookingController.postEditBooking);
router.post("/delete-tickets:ticketId", BookingController.postDeleteBooking);

//MovieShow Routes
router.get("/schedules", MovieShowController.getMovieShows);
router.get("/schedules/:scheduleId", MovieShowController.getMovieShow);
router.post("/schedules", MovieShowController.postMovieShow);
router.get("/edit-schedules/:scheduleId", MovieShowController.getEditMovieShow);
router.post("/edit-schedulles", MovieShowController.postEditMovieShow);
router.post(
  "/delete-schedules/:scheduleId",
  MovieShowController.postDeleteMovieShow
);
// Snack Routes
router.get("/snacks", SnackController.getSnacks);
router.get("/snacks/:snackId", SnackController.getSnack);
router.post("/snackes", SnackController.postSnack);
router.get("/edit-snacks/:snackId", SnackController.getEditSnack);
router.post("/edit-snacks/", SnackController.postEditSnack);
router.post("/delete-snacks/:snackId", SnackController.postDeleteSnack);

//star Routes
router.get("/stars", StarController.getStars);
router.get("/stars/:starId", StarController.getStar);
router.post("/stars", StarController.postStar);
router.get("/edit-stars/:starId", StarController.getEditStar);
router.post("edit-stars", StarController.postEditStar);
router.post("/delete-stars/:starId", StarController.postDeleteStar);

// order Routes
router.get("/orders", OrderController.getOrders);
router.get("/orders/:orderId", OrderController.getOrder);
router.post("/orders", OrderController.postOrders);
router.get("/edit-orders/:orderId", OrderController.getOrder);
router.post("/edit-orders", OrderController.postEditOrders);
router.post("/delete-orders/:orderID", OrderController.postDeleteOrders);

// review Routes
router.get("reviews", ReviewController.getReviews);
router.get("/reviews/:reviewId", ReviewController.getReview);
router.post("/reviews", ReviewController.postReview);
router.get("/edit-reviews/:reviewId", ReviewController.getEditReview);
router.post("/edit-reviews", ReviewController.postEditReview);
router.post("/delete-reviews/:reviewId", ReviewController.postDeleteReview);

module.exports = router;
