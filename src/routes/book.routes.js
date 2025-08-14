import bookController from "../controller/book.controllers.js";
import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import { validate, validateBookId } from "../middlewares/validation.middlewares.js";
import { bookSchema } from "../schema/book.schema.js";


const router = Router();

router.get('/', bookController.findAllBookController);
router.post('/', validate(bookSchema), bookController.createBookController);

router.use(authMiddleware);

router.get('/search', bookController.searchBooksController);
router.get('/:id', validateBookId, bookController.findByIdController);
router.patch('/:id', validateBookId, bookController.updateBookController);
router.delete('/:id', validateBookId, bookController.deleteBookController);

export default router