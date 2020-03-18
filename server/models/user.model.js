const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const UserSchema  = new mongoose.Schema({
  firstName: {
    type: String,
    minLength: [
        3,
        "First name have to be at least 3 characters"
    ]
  },
  lastName: {
    type: String,
    minLength: [
        3,
        "Last name have to be at least 3 characters"
    ]
  },
  email: {
    type: String,
    minLength: [
        3,
        "email have to be at least 3 characters"
    ],
    validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
      }
  },
  password: {
    type: String,
    minLength: [
        8,
        "Password must be at least 8 characters or longer"
    ]
  }
},{timestamps:true});

UserSchema.virtual("confirmPassword")
    .get(()=>this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre("validate",function(next) {
    if(this.password !== this._confirmPassword){
        this.invalidate("confirmPassword", "Password must match confirm password");
    }
    next();
    
});

UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password= hash;
            next();
            
        });
        
});



module.exports = mongoose.model("User", UserSchema);