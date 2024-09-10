const express = require('express');
const router = express.Router();
const { getHomeData, getServicesData } = require('../controllers/apiController');

// Define API endpoints
router.get('/home', getHomeData);         // Home page data
router.get('/services', getServicesData); // Services page data

module.exports = router;
