import bookService from '../service/book.services.js';

async function createBookController(req, res) {
    const newBook = req.body;
    const userId = req.userId;

    try {
        const createdBook = await bookService.createBookService(newBook, userId);
        res.status(201).send(createdBook);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

async function findAllBookController(req, res) {
    try {
        const books = await bookService.findAllBooksService();
        res.send(books)
    } catch (error) {
        res.status(404).send(error.message);
    }
}

async function findByIdController(req, res) {
    const bookId = req.params.id;

    try {
        const book = await bookService.findBookByIdService(bookId);
        return res.send(book)
    } catch (error) {
        res.status(404).send(error.message);
    }
}

async function updateBookController(req, res) {
    const updateBook = req.body;
    const bookId = req.params.id;
    const userId = req.userId;

    try {
        const response = await bookService.updateBookService(updateBook, bookId, userId);
        return res.send(response);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

async function deleteBookController(req, res) {
    const bookId = req.params.id;
    const userId = req.userId;

    try {
        const response = await bookService.deleteBookService(bookId, userId);
        return res.send(response);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

async function searchBooksController(req, res) {
    const { search } = req.query

    try {
        const books = await bookService.searchBooksService(search);
        res.send(books);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export default {
    createBookController,
    findAllBookController,
    findByIdController,
    updateBookController,
    deleteBookController,
    searchBooksController
}