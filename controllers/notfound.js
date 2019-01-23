const { send } = require('micro')


const notFound = (req, res) => {
    send(res, 200, {
        "error": "Route not found"
    })
}

module.exports = notFound