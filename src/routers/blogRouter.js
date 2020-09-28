const express = require('express');
const router = express.Router();
const blogController = require('../app/controllers/blogController');

router.get('/details', blogController.details);
router.get('/', blogController.index);

module.exports = router;
