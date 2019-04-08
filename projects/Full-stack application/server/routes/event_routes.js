const express = require('express')
const eventRoute = express.Router()
const Event = require('../modules/event_module')

eventRoute.route('/')

    .get((req, res)=>{
        Event.find((errl, get)=>{
            err ? res.status(500).send(err) : res.status(200).send(get)
        })
    })

module.exports = eventRoute