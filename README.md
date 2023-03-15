# Author Book Backend APIs [Live](https://author-book.onrender.com)
## Data Models:
![Author](https://user-images.githubusercontent.com/85154840/225295325-e27a8ed9-4f19-4064-91e5-3b1ffc8e53d5.png)

## Endpoint
#### Get the list of all books:
- http://localhost:5000/books
- https://author-book.onrender.com/books

#### Get all authors:
- http://localhost:5000/authors
- https://author-book.onrender.com/authors

#### Get books of specific author:
- http://localhost:5000/authors/id
- https://author-book.onrender.com/authors/id

#### To login make post request:
- http://localhost:5000/login
- https://author-book.onrender.com/login

#### Like a book : make put request by passing bearer token that you got while logging in:
- To login use one of the following email and password :
```
 {
    "email": "test@test.com",
    "password": "password" 
  },
  {
    "email": "user2@example.com",
    "password": "password"
  }
```
- http://localhost:5000/books/like/id
- https://author-book.onrender.com/books/like/id

#### Get user details : make get request with bearer token:
- http://localhost:5000/authors/details/me
- https://author-book.onrender.com/authors/details/me
