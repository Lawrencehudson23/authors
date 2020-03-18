const AuthorCtrl = require("../controllers/author.controller");

module.exports = app => {
    app.post('/api/authors', AuthorCtrl.createAuthor);
    app.get('/api/authors', AuthorCtrl.showAllAuthors);
    app.get("/api/authors/:id", AuthorCtrl.showOneAuthor);
    app.put("/api/authors/:id/edit", AuthorCtrl.editAuthor);
    app.delete("/api/authors/:id", AuthorCtrl.deleteAuthor);
};