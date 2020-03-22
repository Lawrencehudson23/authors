const mongoose = require("mongoose");

mongoose.connect(
'mongodb://localhost/authors'
, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useCreateIndex:true
})
  .then(() => console.log("💻 Mongodb Connected"))
  .catch(err => console.error(err));