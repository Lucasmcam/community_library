import express from "express";
import "dotenv/config"
import "./src/service/cron.services.js"
import { router } from "./src/routes/index.js";

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Server is running on port ${3000}`);
});