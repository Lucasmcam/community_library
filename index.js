import express from "express";
import userRouters from './src/routes/user.routes.js';
import "dotenv/config"
import bookRouters from './src/routes/book.routes.js';
import loanRoutes from './src/routes/loan.routes.js';
import "./src/service/cron.services.js"

const app = express();

app.use(express.json());
app.use(userRouters);
app.use(bookRouters);
app.use(loanRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Server is running on port ${3000}`);
});