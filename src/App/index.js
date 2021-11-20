import express from "express";
import cors from "cors";
import cookie from "cookie-parser";
import {urlencoded, text} from 'body-parser';
import morgan from 'morgan'
import questionRouter from '../routes/QuestionApp/index'
import dotenv from 'dotenv';
import {connect} from '../utils/DBconnect'


const app = express();
dotenv.config()


app.disable("x-powered-by");

// middlewares
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(text({ type: "text/html" }));
app.use(morgan("dev"));

// auth routes
// app.post("/signup", auth);
// app.post("/login", auth);


// main routes
// app.use('/api', validate)


// question app routes
app.use("/question", questionRouter);

// server
export const start = async () => {
     // connect to database
     await connect();
   const port = process.env.PORT ||3200
     // __
     app.listen(port, () => console.log(`Server is up ${port}`));
};
