const UserCtrl = require('../controllers/user.controller');

module.exports = app => {
    app.post("/api/users", UserCtrl.create);
    
}