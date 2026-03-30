const express = require('express');

const router = express.Router()

const sweetsController = require('../controllers/sweetsController');

router.get('/', sweetsController.index);

router.get('/:id', sweetsController.show);

router.post('/add/:id', sweetsController.addToCart);

router.patch('/remove/:id', sweetsController.updateRemoveFromCart);

router.post('/order', sweetsController.createOrder);

module.exports = router