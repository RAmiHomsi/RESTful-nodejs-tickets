const tickets = require("../models/ticketmodel")


const getTickets = (req, res)=>{
    res.json({
        msg: "rgr"
    })
}

const getOneTicket = (req, res)=>{
    res.json({
        msg: "get one"
    })
}

const setTicket = (req, res)=>{
    res.json({
        msg: "set one"
    })
}

const updateTicket = (req, res)=>{
    res.json({
        msg: "update one"
    })
}

const deleteTicket = (req, res)=>{
    res.json({
        msg: "delete one"
    })
}


module.exports = {getTickets,
    getOneTicket,
    setTicket,
    updateTicket,
    deleteTicket}