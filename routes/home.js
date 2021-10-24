const express = require('express')
const router = express.Router();


const itemsController = require('../controllers/itemsController');
module.exports = function () {
   
    //get:/items
    router.get('/items',itemsController.list);

    
    return router;
}