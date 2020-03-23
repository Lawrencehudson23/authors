const jwt = require('jsonwebtoken')

module.exports.authenticate = (req, res, next) =>{
    try {
        jwt.verify(req.cookies.token, process.env.SECRET_KEY);
        next();
        
    } catch(e) {
        res.status(401).json({message: "Unauthorized" });
    }

}


// const jwt = require("jsonwebtoken");

// module.exports.authenticate = (req, res, next) => {
//   jwt.verify(req.cookies.token, process.env.SECRET_KEY, (err, payload) => {
//     if (err) { 
//       res.status(401).json({verified: false});
//     } else {
//       next();
//     }
//   });
// }