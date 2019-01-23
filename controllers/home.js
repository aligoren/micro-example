const { send } = require('micro')

const home = (req, res) => {
    send(res, 200, {
        'hello': 'olleh'
    })
}

module.exports = home