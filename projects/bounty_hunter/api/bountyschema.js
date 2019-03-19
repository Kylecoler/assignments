const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName:{
        type:String,
        default:"Jhon",
        required:true
    },
    lastName:{
        type:String,
        default:"Doe",
        required:true
    },
    living:{
        type:Boolean,
        default:true,
        required:true
    },
    bounty:{
        type:Number,
        default:0
    },
    side:{
        type:String,
        default:"unknown"
    }
})

module.exports = mongoose.model("Bounty", bountySchema)