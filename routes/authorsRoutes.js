const router = require("express").Router();
const auth = require("../middlewares/auth");
const { getAllAuthors, getBooksByAuthorsId, getDetailOfUser } = require("../controllers/authorsController");

router.get("/", getAllAuthors);
router.get("/:id", getBooksByAuthorsId);
router.get("/details/me", auth, getDetailOfUser);

module.exports = router;
