const express = require("express");
const createError = require("http-errors");
const path = require("path");
const cors = require("cors");
const logger = require("morgan");

// import routes
const router = require("./routes/routes");

const app = express();
const port = 3000;

// Middleware setip
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false })); //set to true for JSON
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5000",
    process.env.FRONTEND_URL,
  ],
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
// routes
app.use("/", router);

app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  console.log("ERROR", err);
  // need to respond with the error
  res.status(err.status || 500).json(err);
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Additional event listener for handling server errors
server.on("error", (error) => {
  console.error("Server error:", error.message);
});

module.exports = app;
