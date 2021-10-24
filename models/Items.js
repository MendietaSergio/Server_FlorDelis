const mongoose = require("mongoose");

const itemsSchema = mongoose.Schema({
    nameProduct:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    subCategory:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    stock:{
        type:Number,
        required: true,
        default: 0
    },
    discount:{
        type:Number,
        required: true
    },
    image:{
        type:String
    },  
    offer:{
        type:Boolean,
        required: true
    },
    productFeatured: {
        type:Boolean,
        required: true
    },
    available:{
        type: Boolean,
        required: true,
        default: true
    }

});

module.exports = mongoose.model("items", itemsSchema);
