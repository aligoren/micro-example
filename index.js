const { router, get, post, options, withNamespace } = require('microrouter')
const cors = require('micro-cors')()

const home = require('./controllers/home')
const { bookList, saveBook } = require('./controllers/books')
const notfound = require('./controllers/notfound')
const v1 = withNamespace('/api/v1')

module.exports = router(
    get('/', home),
    v1(
        get('/books(/:isbn)', cors(bookList)),
        options('(/*)', cors(bookList)),
        post('/books', cors(saveBook))
    ),
    get('/*', notfound)
)