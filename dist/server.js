"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _question = _interopRequireDefault(require("./resourses/_question/question.route"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _DBconnect = require("./utils/DBconnect");

var _root = _interopRequireDefault(require("./routes/root"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import cookie from "cookie-parser";
const app = (0, _express.default)();

_dotenv.default.config();

app.disable("x-powered-by"); // middlewares

app.use((0, _cors.default)());
app.use(_express.default.json());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _bodyParser.text)({
  type: "text/html"
}));
app.use((0, _morgan.default)("dev"));
app.use(_express.default.static(_path.default.join(__dirname, '../public')));
app.set('view engine', 'ejs'); // app.set("views", __dirname + "../views");
// root routes

app.use("/", _root.default); // auth routes
// app.post("/signup", auth);
// app.post("/login", auth);
// main routes
// app.use('/api', validate)
// question app routes

app.use("/question", _question.default); // server

const start = async () => {
  // connect to database
  await (0, _DBconnect.connect)();
  const port = process.env.PORT || 3200; // __

  app.listen(port, () => console.log(`Server is up ${port}`));
};

exports.start = start;