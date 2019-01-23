const { json, send } = require('micro')
const fs = require('fs');

const bookData = require('../data/book-list')

const bookList = (req, res) => {
    let books = bookData

    if(req.params.isbn) {
        books = bookData.find(b => b.isbn == req.params.isbn)
    }

    send(res, 200, books)
}

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

module.exports = {
    bookList,
    saveBook
}