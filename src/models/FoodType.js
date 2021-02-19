const mongoose = require('mongoose');


const foodTypeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true,
        lowercase:true
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Restaurant"
    }
});

foodTypeSchema.virtual('dishes', {
    ref: 'Dish',
    localField: "_id",
    foreignField: "foodType"
})

const FoodType = mongoose.model('FoodType', foodTypeSchema)

module.exports = FoodType;