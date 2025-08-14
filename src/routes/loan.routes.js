import { Router } from "express";
import loanControllers from "../controller/loan.controllers.js"; 
import { validate, validateLoanId } from "../middlewares/validation.middlewares.js";
import { loanSchema } from "../schema/loans.schema.js";


const router = Router();

router.post('/', validate(loanSchema), loanControllers.createLoanController)
router.get('/', loanControllers.findAllLoansController)
router.get('/:id', validateLoanId, loanControllers.findByIdLoanController)
router.delete('/:id', validateLoanId, loanControllers.deleteLoanController)

export default router;
  