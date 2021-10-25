const express = require('express')
const router = express.Router();


const itemsController = require('../controllers/itemsController');
module.exports = function () {
    //get:/items
    router.get('/items',itemsController.list);
    
    //get: /items/:id
    router.get('/items/:id',itemsController.detail);
    //get: /items/search
    router.get('/items/search/:query',itemsController.search);
    

    //post: /items
    //antes de invocar a itemsController.add, hace el middleware fileUpload.
    router.post('/items',itemsController.fileUpload,itemsController.add)
    //put: /items/:id
    router.put('/items/:id',itemsController.fileUpload,itemsController.update);
    //delte: /items/:id
    router.delete('/items/:id',itemsController.delete);
    
    return router;
}