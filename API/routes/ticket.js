const express = require('express')
const router = express.Router()


const {
    getTickets,
    getOneTicket,
    setTicket,
    deleteTicket,
    updateTicket
 } = require('../controllers/ticketcontroller')

 router.route('/')
   .get(getTickets)
   .post(setTicket)

   router.route('/:id')
   .get(getOneTicket)
   .put(updateTicket)
   .delete(deleteTicket)


module.exports = router