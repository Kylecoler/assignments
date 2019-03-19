const express = require('express')
const bountyroute = express.Router()
const Bounty = require('./bountyschema')

bountyroute.route('/')

    .get((req, res)=>{
        Bounty.find((err, get)=>{
            err ? res.status(500).send(err):res.status(200).send(get)
        })
    })

    .post((req, res)=>{
        const newBounty = new Bounty(req.body)
        newBounty.save(err =>{
            err ? res.status(500).send(err) : res.status(200).send(newBounty)
        })
    })

bountyroute.route('/:id')

    .get((req, res)=>{
        const {id} = req.params
        Bounty.findById(id, (err, bounty)=>{
            err ? res.status(500).send(err) : res.status(200).send(bounty)
        })
    })

    .put((req, res)=>{
        Bounty.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true},
            (err, get)=>{
                err ? res.status(500).send(err) : res.status(200).send(get)
            }
        )
    })

    .delete((req,res)=>{
        Bounty.findOneAndDelete(
            req.params.id,
            (err, get)=>{
                err ? res.status(500).send(err) : res.status(200).send(get)
            }
        )
    })

module.exports = bountyroute