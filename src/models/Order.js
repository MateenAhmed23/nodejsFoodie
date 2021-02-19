const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    dishes:{
        type:[mongoose.Schema.Types.ObjectId],
        required: true,
        ref:"Dish"
    },
    status:{
        type:Number,
        default: 0
    }
});


const Order = mongoose.model('Order', OrderSchema)

module.exports = Order