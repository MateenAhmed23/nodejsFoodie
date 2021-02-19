const mongoose = require('mongoose');


const restaurantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true,
        lowercase:true
    },
    area:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Area"
    }
});

restaurantSchema.virtual('foodtypes', {
    ref: 'FoodType',
    localField: "_id",
    foreignField: "restaurant"
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant;