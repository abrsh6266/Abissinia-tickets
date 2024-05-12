const Hall = require("../../models/hall");

// Hall CRUD
exports.getHalls = (req, res, next) => {
  Hall.find()
    .then((halls) => {
      return res.send(halls);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getHall = (req, res) => {
  const hallId = req.params.hallId;
  Hall.findById(hallId)
    .then((hall) => {
      res.send(hall);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postAddHall = (req, res, next) => {
  const { name, rows, columns, address, vip } = req.body;
  const hall = new Hall({ name, rows, columns, address, vip });
  hall
    .save()
    .then((hall) => {
      console.log("New Hall registered");
      return res.send(hall);
    })
    .catch((err) => {
      console.log(err);
    });
  //   res.send(req.body);
};
exports.getEditHall = (req, res) => {
  const hallId = req.params.hallId;
  Hall.findById(hallId)
    .then((hall) => {
      return res.send(hall);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postEditHall = (req, res) => {
  const hallId = req.body._id;
  const updatedName = req.body.name;
  const updatedRows = req.body.rows;
  const updatedColumns = req.body.columns;
  const updatedAddress = req.body.address;
  const updatedVip = req.body.vip;
  Hall.findById(hallId)
    .then((hall) => {
      hall.name = updatedName;
      hall.address = updatedAddress;
      hall.rows = updatedRows;
      hall.columns = updatedColumns;
      hall.vip = updatedVip;

      return hall.save();
    })
    .then((updatedHall) => {
      console.log("Successfully updated!!");
      res.send(updatedHall);
      //   res.redirect("admin/halls");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postDeleteHall = (req, res) => {
  const hallId = req.params.hallId;
  Hall.findByIdAndDelete(hallId)
    .then(() => {
      console.log("Successfully deleted");
      return res.redirect("/admin/halls");
    })
    .catch((err) => {
      console.log(err);
    });
};
