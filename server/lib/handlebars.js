//Uso del Time ago
const timeago = require('timeago.js')

const helpers = {}

helpers.timeago = (timestamp) =>{
    return timeago.format(timestamp)
}
helpers.URLformat = (url) =>{
    return `http:://${url}`
}

module.exports = helpers