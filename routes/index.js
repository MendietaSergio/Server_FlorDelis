const express = require('express')
const router = express.Router();


const itemsController = require('../controllers/itemsController');
module.exports = function () {
    //post: /items
    router.post('/items',itemsController.add)
    
    //get:/items
    router.get('/items',itemsController.list);
    
    //get: /items/:id
    router.get('/items/:id',itemsController.detail);
    
    //put: /items/:id
    router.put('/items/:id',itemsController.update);
    
    //delte: /items/:id
    router.delete('/items/:id',itemsController.delete);
    
    
    return router;
}