const Star = require("../../models/star");

exports.getStars = (req, res) => {
  Star.find()
    .then((stars) => {
      res.send(stars);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getStar = (req, res) => {
  const starId = req.params.starId;
  Star.findById(starId)
    .then((star) => {
      res.send(star);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postStar = (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const profilePhoto = req.body.profilePhoto;

  const star = new Star(name, address, profilePhoto);
  star
    .save()
    .then((star) => {
      console.log("star has been successfully registered!!");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getEditStar = (req, res) => {
  const starId = req.params.starId;
  Star.findById(starId)
    .then((star) => {
      res.send(star);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postEditStar = (req, res) => {
  const starId = req.body.starId;
  const updatedName = req.body.name;
  const updatedAddress = req.body.address;
  const updatedProfilePhoto = req.body.profilePhoto;

  Star.findById(starId)
    .then((star) => {
      star.name = updatedName;
      star.address = updatedAddress;
      star.profilePhoto = updatedProfilePhoto;

      return star.save();
    })
    .then((updatedStar) => {
      console.log("Successfully updated!!");
      res.send(updatedStar);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postDeleteStar = (req, res) => {
  const starId = req.params.starId;

  Star.findByIdAndDelete(starId)
    .then(() => {
      console.log("the star successfully deleted!!");
    })
    .catch((err) => {
      console.log(err);
    });
};
