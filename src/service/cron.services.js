import cron from 'node-cron'
import moment from 'moment';
import sendEmail from './email.services.js';
import loanRepository from "../repositories/loan.repositories.js"
import userRepository from "../repositories/user.repositories.js"
import bookRepository from "../repositories/book.repositories.js"


cron.schedule('0 9 * * *', async () => {
    console.log("Running daily job to check for due dates...");
    const loans = await loanRepository.findAllLoanRepository();
    const today = moment().startOf('day');

    loans.forEach(async (loan) => {
        const dueDate = moment(loan.dueDate).startOf('day');
        const reminderDueDate = moment(dueDate).subtract(1, 'days');
        if (today.isSame(reminderDueDate)) {
            sendEmail(loans.email, loans.title, loan.dueDate)
        }
    })
})

