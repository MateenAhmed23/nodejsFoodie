const mongoose = require('mongoose');


const dishSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true,
        lowercase:true
    },
    foodType:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "FoodType"
    },
    price: {
        type: Number,
        required: true,
        trim:true
    },
    desc: {
        type: String,
        required: true,
        trim:true
    }
});

DishSchema.virtual('Order', {
    ref: 'Order',
    localField: "_id",
    foreignField: "dishes"
})

const Dish = mongoose.model('Dish', dishSchema)

module.exports = Dish;