const express = require("express");

const app = express();
const path = require("path"); // we do not need to i path
const postsRoutes = require("./api/posts/posts.routes");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./database");
const notFoundMiddleware = require("./middlewares/notFoundHandler");
const errorHandeler = require("./middlewares/errorHandeler");
const dotenv = require("dotenv");
dotenv.config();

connectDb();
app.use("/media", express.static(path.join(__dirname, "media")));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/posts", postsRoutes);

// handle error
app.use(notFoundMiddleware);
app.use(errorHandeler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
