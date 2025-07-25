// routes/stripeRouter.js
const express = require('express');
const { createPaymentIntent } = require('../controllers/stripeController');

const router = express.Router();

router.post('/create-payment-intent', createPaymentIntent);

module.exports = router;
