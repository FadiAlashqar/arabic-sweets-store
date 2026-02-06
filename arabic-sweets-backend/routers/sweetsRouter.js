const express = require('express');

const router = express.Router()

const sweetsController = require('../controllers/sweetsController');

router.get('/', sweetsController.index);

router.get('/:id', sweetsController.show);


module.exports = router