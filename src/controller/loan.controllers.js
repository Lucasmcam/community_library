import loanService from "../service/loan.services.js";

async function createLoanController(req, res){
    const { bookId, dueDate } = req.body;
    const userId = req.userId;

    try {
    const createdLoan = await loanService.createLoanService(userId, bookId, dueDate);
    res.status(201).send(createdLoan);
    } catch (error) {
    return res.status(400).send(error.message);
    }
}

async function findAllLoansController(req, res){
    try {
    const loans = await loanService.findAllLoanService();
    res.send(loans);
    } catch (error) {
    res.status(404).send(error.message);
    }
}

async function findByIdLoanController(req, res){
    const loanId = req.params.id;

    try {
    const loan = await loanService.findLoanByIdService(loanId);
    res.send(loan);
    } catch (err) {
    res.status(404).send(err.message);
    }
}

async function deleteLoanController(req, res){
    
    const loanId = req.params.id;
    const userId = req.userId;

    try {
    const response = await loanService.deleteLoanService(loanId);
    res.send(response);
    } catch (err) {
    res.status(400).send(err.message);
    }
}


export default {
    createLoanController,
    findAllLoansController,
    findByIdLoanController,
    deleteLoanController
}