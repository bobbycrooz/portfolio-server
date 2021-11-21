import express from "express";
import cors from "cors";
// import cookie from "cookie-parser";
import {urlencoded, text} from 'body-parser';
import morgan from 'morgan'
import questionRouter from './resourses/_question/question.route'
import dotenv from 'dotenv';
import {connect} from './utils/DBconnect'
import defaultRoute from './routes/root'
import path from 'path'


const app = express();
dotenv.config()


app.disable("x-powered-by");

// middlewares
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(text({ type: "text/html" }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'ejs');
// app.set("views", __dirname + "../views");

// root routes
app.use("/", defaultRoute);


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
