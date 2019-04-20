const mongoose = require('mongoose'),
      bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema,
      userSchema = new Schema({
        email: { type: String, required: true, unique: true, lowercase: true},
        name: { type: String, required: true},
        password: { type: String, required: true}
      });

userSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', userSchema);
