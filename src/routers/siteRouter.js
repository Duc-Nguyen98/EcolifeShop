const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/siteController');



router.get('/contactPage', siteController.contactPage);
router.get('/wishPage', siteController.wishPage);
router.get('/', siteController.indexPage);

module.exports = router;
