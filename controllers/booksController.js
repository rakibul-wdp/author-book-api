const { AllBooks } = require("../fakerModels/authorBooks");
const Books = require("../users.json")["Books"];

const getAllBooks = (req, res) => {
  res.status(200).json(AllBooks);
}

const likeBook = (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  let likeByUser = [];
  let index = -1;

  for (let i = 0; i < Books.length; i++) {
    if (Books[i]["likedBy"] === userId) {
      likeByUser = Books[i]["likedBooks"]
      index = i;
      break;
    }
  }

  const bookId = id;

  for (let i = 0; i < likeByUser.length; i++) {
    if (likeByUser[i] === bookId) {
      return res.status(200).json({ "message": "You have already liked it" }).send()
    }
  }

  let liked = false

  for (let i = 0; i < AllBooks.length; i++) {
    if (AllBooks[i]._id === id) {
      liked = true;
      AllBooks[i].likes = AllBooks[i].likes + 1;
      Books[index]["likedBooks"].push(bookId);
    }

  }

  if (!liked) {
    return res.status(400).json({ "message": "Book doesn't exist" }).send()
  }
  res.status(200).json(AllBooks);
}

module.exports = { getAllBooks, likeBook };