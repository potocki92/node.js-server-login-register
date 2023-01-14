const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userDataSchema = new Schema(
  {
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    username: {
      type: String,
      require: [true, "Please provide a username"],
      unique: [true, "Username Exist"],
    },
    password: {
      type: String,
      required: [true, "Please provide an password!"],
      unique: false,
    },
  },
  { collection: "InvoicesUsers" }
);
var UserData =
  mongoose.model.Users || mongoose.model("InvoicesUsers", userDataSchema);
module.exports = UserData;
