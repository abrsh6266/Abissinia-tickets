const Snack = require("../../models/snack");

exports.getSnacks = (req, res) => {
  Snack.find()
    .then((snacks) => {
      res.send(snacks);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getSnack = (req, res) => {
  const snackId = req.params.snackId;
  Snack.findById(snackId)
    .then((snack) => {
      res.send(snack);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postSnack = (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;

  const snack = new Snack(name, description, price);
  snack
    .save()
    .then((snack) => {
      console.log("snack successfully registered!!");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getEditSnack = (req, res) => {
  const snackId = req.params.snackId;
  Snack.findById(snackId)
    .then((snack) => {
      res.send(snack);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postEditSnack = (req, res) => {
  const snackId = req.body.snackId;
  const updatedName = req.body.name;
  const updatedDescription = req.body.description;
  const updatedPrice = req.body.price;

  Snack.findById(snackId)
    .then((snack) => {
      snack.name = updatedName;
      snack.description = updatedDescription;
      snack.price = updatedPrice;

      return snack.save();
    })
    .then((snack) => {
      console.log("Snack has been successfully updated!!");
      res.send(snack);
      // res.redirect("/admin/snackes"); //redirecting to the snack list page
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postDeleteSnack = (req, res) => {
  const snackId = req.params.snackId;

  Snack.findByIdAndDelete(snackId)
    .then((result) => {
      console.log("Deleted successfully!!");
    })
    .catch((err) => {
      console.log(err);
    });
};
