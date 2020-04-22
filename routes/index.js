console.log("Router Loading......................");

const express = require('express'); // fetches the existing instance of express
const router = express.Router();
const homeController = require('../controllers/home-controller');

console.log("Router Loaded.");

router.get('/', homeController.home);

module.exports = router;