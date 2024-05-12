const User = require("../../models/user");

exports.getUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getUser = (req, res) => {
  const userId = req.params.userId;
  User.findById(userId)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
};
// exports.postUsers = (req, res) => {
//   const username = req.body.username;
//   const email = req.body.email;
//   const password = req.body.email;
//   const profileUrl = req.body.profileUrl;
//   const role = req.body.role;

//   const user = new User(username, email, password, profileUrl, role);
//   user
//     .save()
//     .then((user) => {
//       console.log("New User registered!!");
//       res.send(user);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

exports.postEditUsers = (req, res) => {
  const userId = req.body.userId;
  const updatedUsername = req.body.username;
  const updatedEmail = req.body.email;
  const updatedPassword = req.body.password;
  const updatedProfileUrl = req.body.profileUrl;
  const updatedRole = req.body.role;

  User.findById(userId)
    .then((user) => {
      user.username = updatedUsername;
      user.email = updatedEmail;
      user.password = updatedPassword;
      user.profileUrl = updatedProfileUrl;
      user.role = updatedRole;

      return user.save();
    })
    .then((updateduser) => {
      console.log("usser successfully updated!");
      res.send(updateduser);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postDeleteUsers = (req, res) => {
  const userId = req.params.userId;
  User.findByIdAndDelete(userId)
    .then((user) => {
      console.log("user delete successfully!");
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
};
