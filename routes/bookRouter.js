// eslint-disable

const express = require('express');
const Book = require('../models/bookModel');

function routes() {
  const bookRouter = express.Router();
  bookRouter
    .route('/books')
    .post((req, res) => {
      const book = new Book(req.body);
      book.save();
      return res.status(201).json(book);
    })

    .get((req, res) => {
      const query = {};

      if (req.query.genre) {
        query.genre = req.query.genre;
      }

      Book.find(query, (err, books) => {
        if (err) {
          return res.send(err);
        }
        return res.json(books);
      });
    });

  bookRouter.use('/books/:bookId', (req, res, next) => {
    Book.findById(req.params.bookId, (err, book) => {
      if (err) {
        return res.send(err);
      }
      if (book) {
        req.book = book;
        return next();
      }
      return res.sendStatus(404);
    });
  });
  bookRouter
    .route('/books/:bookId')
    .get((req, res) => res.json(req.book))
    .put((req, res) => {
      const { book } = req;
      const { body } = req;

      Object.assign(book, body);
      book.save(err => (err ? res.send(err) : res.json(book)));
    })
    .patch((req, res) => {
      const { book } = req;
      const { body } = req;
      body._id ? delete body._id : null;

      Object.assign(book, body);
      book.save(err => (err ? res.send(err) : res.json(book)));
    })
    .delete((req, res) => {
      const { book } = req;
      book.remove(err => (err ? res.send(err) : res.sendStatus(204)));
    });

  return bookRouter;
}

module.exports = routes;
