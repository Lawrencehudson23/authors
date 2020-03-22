const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const UserSchema  = new mongoose.Schema({
  firstName: {
    type: String,
    minLength: [
        3,
        "First name must be at least 3 characters or more"
    ]
  },
  lastName: {
    type: String,
    minLength: [
        3,
        "Last name must be at least 3 characters or more"
    ]
  },
  email: {
    type: String,
    unique: true,
    validate: [
        val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        "Please enter a valid email address"
    ]
  },
  password: {
    type: String,
    minLength: [
        8,
        "Password must be at least 8 characters or longer"
    ]
  }
},{timestamps: true });
//only in getter setter
UserSchema.virtual("confirmPassword",{
  get:() => this._confirmPassword,
  set:val => this._confirmPassword = val
});

UserSchema.pre("validate",function(next) {
    console.log(this.password)
    console.log(this.confirmPassword)
    if(this.password !== this.confirmPassword){
      console.log("Password is not matching!");

      this.invalidate("confirmPassword", "Password must match confirm password");
    }
    
    console.log("Password is matching!");
    next();
    
});

UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password= hash;
            next()
          })
});



module.exports = mongoose.model("User", UserSchema);