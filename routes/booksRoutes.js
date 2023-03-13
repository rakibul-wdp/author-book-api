const router = require("express").Router();
const auth = require("../middlewares/auth");
const { getAllBooks, likeBook, unlikeBook } = require("../controllers/booksController");

router.get("/", getAllBooks);
router.put("/like/:id", auth, likeBook);
router.put("/unlike/:id", auth, unlikeBook);

module.exports = router;