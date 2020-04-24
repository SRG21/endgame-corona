console.log("Router Loading......................");

const express = require('express'); // fetches the existing instance of express
const router = express.Router();

const homeController = require('../controllers/home-controller');

router.get('/', homeController.home);
//router.use('/addlist', require('./addlist'));
router.post('/addlist', homeController.addlist);
//router.use('/dellist', require('./dellist'));

console.log("Router Loaded.");

module.exports = router;