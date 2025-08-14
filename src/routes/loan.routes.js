import { Router } from "express";
import loanControllers from "../controller/loan.controllers.js"; 
import { validate, validateLoanId } from "../middlewares/validation.middlewares.js";
import { loanSchema } from "../schema/loans.schema.js";


const router = Router();

router.post('/loans', validate(loanSchema), loanControllers.createLoanController)
router.get('/loans', loanControllers.findAllLoansController)
router.get('/loans/:id', validateLoanId, loanControllers.findByIdLoanController)
router.delete('/loans/:id', validateLoanId, loanControllers.deleteLoanController)

export default router;
  