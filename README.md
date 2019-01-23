# Simple Microservice with Zeit' Micro

An example microservice built with Zeit' micro. There is no real database for this simple example. When you add a new book, `data/book-list.js` file will be updated. This file contains an array with `module.exports`

**How the data updating?**

For example, `controllers/books.js` file contains code like below. This code explains everything:

```js
const saveBook = async (req, res) => {
    const body = await json(req)
    bookData.push(body)
    fs.writeFile('./data/book-list.js', "module.exports = " + JSON.stringify(bookData), (err) => {
        if(err) {
            console.log(err)
        }
    })
    send(res, 200, {books: bookData})
}
```

## Request Example with Fetch API and Postman

You can only add new book or list all books or list by isbn number

### Add New Book

**Fetch API**

```js
fetch('http://localhost:3000/api/v1/books', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "isbn": "9788422615798",
        "title": "Nineteen Eighty-Four",
        "subtitle": "A Modern Introduction to Programming",
        "author": "George Orwell",
        "published": "1949-06-08T00:00:00.000Z",
        "publisher": "Houghton Mifflin Harcourt",
        "pages": 328,
        "description": "In 1984, London is a grim city in the totalitarian state of Oceania where Big Brother is always watching you and the Thought Police can practically read your mind. Winston Smith is a man in grave danger for the simple reason that his memory still functions. Drawn into a forbidden love affair, Winston finds the courage to join a secret revolutionary organization called The Brotherhood, dedicated to the destruction of the Party. Together with his beloved Julia, he hazards his life in a deadly match against the powers that be.",
        "website": "https://www.amazon.com/1984-George-Orwell/dp/1328869334"
    })
}).then(resp => resp.json())
.then(obj => {
  console.log(obj)
})
```

**Postman**

The body type should be raw and content type should be `application/json`

```json
{
    "isbn": "9788422615798",
    "title": "Nineteen Eighty-Four",
    "subtitle": "A Modern Introduction to Programming",
    "author": "George Orwell",
    "published": "1949-06-08T00:00:00.000Z",
    "publisher": "Houghton Mifflin Harcourt",
    "pages": 328,
    "description": "In 1984, London is a grim city in the totalitarian state of Oceania where Big Brother is always watching you and the Thought Police can practically read your mind. Winston Smith is a man in grave danger for the simple reason that his memory still functions. Drawn into a forbidden love affair, Winston finds the courage to join a secret revolutionary organization called The Brotherhood, dedicated to the destruction of the Party. Together with his beloved Julia, he hazards his life in a deadly match against the powers that be.",
    "website": "https://www.amazon.com/1984-George-Orwell/dp/1328869334"
}
```

### Get All Books

```js
fetch('http://localhost:3000/api/v1/books', {
    method: 'GET',
}).then(resp => resp.json())
.then(obj => {
  console.log(obj)
})
```

### Get Book by ISBN Number

```js
fetch('http://localhost:3000/api/v1/books/9788422615798', {
    method: 'GET',
}).then(resp => resp.json())
.then(obj => {
  console.log(obj)
})
```