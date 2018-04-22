const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  firstName: String,
  lastName: String
});

const options = {
  usernameField: 'email'
};

userSchema.plugin(passportLocalMongoose, options);

const User = mongoose.model('User', userSchema);

module.exports = User;
