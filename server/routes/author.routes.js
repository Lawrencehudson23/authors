const AuthorCtrl = require("../controllers/author.controller");

const {authenticate} = require('../config/jwt.config');


module.exports = app => {
    app.post('/api/authors/new',AuthorCtrl.createAuthor);
    app.get('/api/authors',authenticate, AuthorCtrl.showAllAuthors);
    app.get("/api/authors/:id", AuthorCtrl.showOneAuthor);
    app.put("/api/authors/:id/edit", AuthorCtrl.editAuthor);
    app.delete("/api/authors/:id",AuthorCtrl.deleteAuthor);
    
};