const stripe = require('stripe')("");
const express = require('express');

const router = express.Router();




router.post('/create', async (req, res) => {

    const charge = await stripe.charges.create({
        amount: req.body.amount,
        currency: 'usd',
        description: 'LifeStyle Vacations',
        source: req.body.token
    })
    console.log(charge)
})



module.exports = router;