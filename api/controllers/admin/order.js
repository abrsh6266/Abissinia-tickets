const Order = require("../../models/order");

exports.getOrders = (req, res) => {
  Order.find()
    .then((orders) => {
      res.send(orders);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getOrder = (req, res) => {
  const orderId = req.params.orderId;
  Order.findById(orderId)
    .then((order) => {
      res.send(order);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postOrders = (req, res) => {
  const snacks = req.body.snacks;
  const price = req.body.price;

  const order = new Order({ snacks, price });
  order
    .save()
    .then((order) => {
      console.log("Order registered successfully!!");
      res.send(order);
      //   res.redirect("/admin/orders"); //redirecting to ordrers page!!
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postEditOrders = (req, res) => {
  const orderId = req.body.orderId;
  const updatedSnacks = req.body.snacks;
  const updatedPrice = req.body.price;
  Order.findById(orderId)
    .then((order) => {
      order.snacks = updatedSnacks;
      order.price = updatedPrice;

      return order.save();
    })
    .then((updatedOrder) => {
      console.log("Order updated successfully!!");
      res.send(updatedOrder);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postDeleteOrders = (req, res) => {
  const orderId = req.params.orderId;

  Order.findByIdAndDelete(orderId)
    .then((deletedOrder) => {
      res.send(deletedOrder);
      // res.redirect("/admin/orders"); //redirecting to orders page
    })
    .catch((err) => {
      console.log(err);
    });
};
