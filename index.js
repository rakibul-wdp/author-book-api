const express = require("express");
const passport = require("passport");
const { jwtStrategy } = require("./config/passport");
const authorsRoutes = require("./routes/authorsRoutes");
const booksRoutes = require("./routes/booksRoutes");
const loginRoutes = require("./routes/loginRoutes");

const app = express();
const PORT = 5000;

app.use(express.json())
passport.use("jwt", jwtStrategy);

app.use("/login", loginRoutes);
app.use("/authors", authorsRoutes);
app.use("/books", booksRoutes);

app.use((req, res, next) => {
  res.status(404).json({ "message": "NOT FOUND" });
});

app.listen(PORT, () => {
  console.log("Backend is working on port : ", PORT);
});