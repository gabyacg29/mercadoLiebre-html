// ************ Require ************
const express = require('express');
const router = express.Router();

// ************ Controller Requirido ************
const mainController = require('../controllers/mainController');

/* GET - home page. a la página principal */
router.get('/', mainController.root);

module.exports = router;