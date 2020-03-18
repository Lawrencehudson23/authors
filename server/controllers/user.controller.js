const User = require('../models/user.model');

module.exports.create = (req,res) => {
    User.create(req.body)
        .then(newUser => res.json({
            state: "Success",
            id: req.body._id
        }))
        .catch(err=>res.json(err))
    // const user = new User(req.body);
    
    // user.save()
    //   .then(() => {
    //   res.json({msg:"success!", user:user});
    // })
    // .catch(err => res.json(err));
    
};

