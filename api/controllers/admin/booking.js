const Booking = require("../../models/booking");
// booking CRUD
exports.getBookedTickets = (req, res) => {
  Booking.find()
    .then((tickets) => {
      res.send(tickets);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getBookedTicket = (req, res) => {
  const ticketId = req.params.bookingId;
  Booking.findById(ticketId)
    .then((ticket) => {
      res.send(ticket);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postBooking = (req, res) => {
  const movieShowId = req.body.movieShowId;
  const userId = req.body.userId;
  const orderId = req.body.orderId;
  const seats = req.body.seats;
  const price = req.body.price;
  const ticket = new Booking(movieShowId, userId, orderId, seats, price);
  ticket
    .save()
    .then(() => {
      console.log("Ticket booked successfully");
      // res.redirect("/admin/tickets") //redirecting to tickets list page
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getEditBooking = (req, res) => {
  const bookingId = req.params.bookingId;
  Booking.findById(bookingId)
    .then((ticket) => {
      res.send(ticket);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postEditBooking = (req, res) => {
  const bookingId = req.body.bookingId;
  const updatedMovieShowId = req.body.movieShowId;
  const updatedUserId = req.body.userId;
  const updatedOderId = req.body.orderId;
  const updatedSeats = req.body.seats;
  const updatedPrice = req.body.price;

  Booking.findById(bookingId)
    .then((ticket) => {
      ticket.movieShowId = updatedMovieShowId;
      ticket.userId = updatedUserId;
      ticket.orderId = updatedOderId;
      ticket.seats = updatedSeats;
      ticket.price = updatedPrice;

      return ticket.save();
    })
    .then((updatedTicket) => {
      console.log("Ur booking updated successfully!");
      res.send(updatedTicket);
    })
    .catch((err) => {
      console.log(err);
      //   res.redirect("/admin/tickets"); // redirect to tickets page
    });
};
exports.postDeleteBooking = (req, res) => {
  const bookingId = req.params.bookingId;

  Booking.findByIdAndDelete(bookingId)
    .then(() => {
      console.log("Booking has been successfully deleted!");
      // res.redirect("/admin/tickets"); //to direct to the home page
    })
    .catch((err) => {
      console.log(err);
    });
};
//
