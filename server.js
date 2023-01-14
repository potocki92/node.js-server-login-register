if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
  
  // Importing libraries that we installed using npm
  const express = require("express");
  const mongoose = require("mongoose");
  const passport = require("passport");
  const flash = require("express-flash");
  const session = require("express-session");
  const methodOverride = require("method-override");
  
  const app = express();
  
  // // Passport Config
  require("./config/passport-config")(passport);
  
  // DB Config
  const db = require("./config/keys").mongoURI;
  
  // Connect to MongoDB
  mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));
  
  // Bodyparser
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  // Static Files
  app.use(express.static("./"));
  app.set("/views", express.static(__dirname + "/views"));
  app.use("/css", express.static(__dirname + "/css"));
  
  // Connect flash
  app.use(flash());
  
  // Express session
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false, // We won't reasve the session variable if nothing is change
      saveUninitialized: false,
    })
  );
  
  // Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use(methodOverride("_method"));
  
  // Global variables
  app.use(function (req, res, next) {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    next();
  });
  
  // Routes
  app.use("/", require("./routes/users"));
  
  
  app.listen(3000, () => {
    console.log("Server is ready: http://localhost:3000");
  });
  