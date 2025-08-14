import { Router } from "express";
import userRouter from '../routes/user.routes.js'
import loanRouter from '../routes/loan.routes.js'
import bookRouter from '../routes/book.routes.js'

const router = Router();

router.use("users", userRouter);
router.use("loans", loanRouter);
router.use("books", bookRouter);

export {router}

