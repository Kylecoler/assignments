const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    day:Date
})

module.exports = mongoose.model('Event', eventSchema)