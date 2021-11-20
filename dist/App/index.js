"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("../routes/QuestionApp/index"));
const dotenv_1 = __importDefault(require("dotenv"));
const DBconnect_1 = require("../utils/DBconnect");
const app = (0, express_1.default)();
dotenv_1.default.config();
app.disable("x-powered-by");
// middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use((0, body_parser_1.text)({ type: "text/html" }));
app.use((0, morgan_1.default)("dev"));
// auth routes
// app.post("/signup", auth);
// app.post("/login", auth);
// main routes
// app.use('/api', validate)
// question app routes
app.use("/question", index_1.default);
// server
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    // connect to database
    yield (0, DBconnect_1.connect)();
    const port = process.env.PORT || 3200;
    // __
    app.listen(port, () => console.log(`Server is up ${port}`));
});
exports.start = start;
