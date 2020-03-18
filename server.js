const express = require("express");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

require("./server/config/mongoose.config");
const authorRoutes = require("./server/routes/author.routes");
const userRoutes = require('./server/routes/user.routes');
authorRoutes(app);
userRoutes(app);



app.listen(5000, () => console.log("The server is all fired up on port 5000"));