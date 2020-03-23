const Author = require('../models/author.model');

module.exports = {
    create(req, res) {
        Author.findByIdAndUpdate(
            req.params.authorId,
            {
                $push: {
                    favoriteBooks: req.body
                }
            },
            {
                new: true,
                runValidators: true
            }
        )
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },

    update(req, res) {
        Author.updateOne(
            {
                _id: req.params.authorId,
                'favoriteBooks._id': req.params.bookId
            },
            {
                $set: {
                    'favoriteBooks.$.title': req.body.title
                }
            }
        )
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
    },

    delete(req, res) {
        Author.findByIdAndUpdate(
            req.params.authorId,
            {
                $pull: {
                    favoriteBooks: {
                        _id: req.params.bookId
                    }
                }
            },
            {
                new: true
            }
        )
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
    }
}