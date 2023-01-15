const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt"); // Importing bcrypt package
const passport = require("passport");
// Load User model
const User = require("../schema/user-model");
const { forwardAuthenticated, ensureAuthenticated } = require("../config/auth");

// Login Page
router.get("/login", forwardAuthenticated, (req, res) =>
  res.render("login.ejs")
);

// Register Page
router.get("/register", forwardAuthenticated, (req, res) => {
  res.render("register.ejs");
});

// Index Page
router.get("/", ensureAuthenticated, (req, res) =>
  res.render("index.ejs", {
    user: req.user,
  })
);

// Register
router.post("/register", async (req, res) => {
  const { firstname, lastname, username, password } = req.body;
  let errors = [];

  // Check required fields
  if (!firstname || !lastname || !username || !password) {
    errors.push({ msg: "Please fill in all fields" });
  }
  // Check pass langth
  if (password.length < 6) {
    errors.push({ msg: "Password should be at least 6 characters" });
  }

  if (errors.length > 0) {
    res.render("register.ejs", {
      errors,
      firstname,
      lastname,
      username,
      password,
    });
  } else {
    User.findOne({ username: username }).then((user) => {
      if (user) {
        errors.push({ msg: "Username already exists" });
        res.render("register.ejs", {
          errors,
          firstname,
          lastname,
          username,
          password,
        });
      } else {
        const newUser = new User({
          firstname,
          lastname,
          username,
          password,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                req.flash(
                  "success_msg",
                  "You are now registered and can log in"
                );
                res.redirect("/login");
              })
              .catch((err) => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
});

// Logout
router.delete("/logout", (req, res) => {
  req.logout(req.user, (err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

module.exports = router;
