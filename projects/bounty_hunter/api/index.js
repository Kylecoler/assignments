const express = require('express')
const App = express()
const mongoose = require('mongoose')

const port = process.env.port || 3003

App.use(express.json())
App.use('/bounties', require('./bountyroute'))

mongoose.connect('mongodb://localhost:27017/bounties', {useNewUrlParser: true})
    .then(console.log("Connected to MongoDB"))
    .catch(err => console.log(err))

App.listen(port, ()=>{
    console.log(`listening to ${port}`)
})
