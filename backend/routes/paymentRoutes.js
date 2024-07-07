const express = require('express');
const stripe = require('stripe')('your_stripe_secret_key');

const router = express.Router();

router.post('/payment', async (req, res) => {
  const { amount, token } = req.body;

  try {
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      description: 'E-commerce store payment',
      source: token,
    });
    res.json(charge);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
