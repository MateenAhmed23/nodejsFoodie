const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true,
        lowercase:true,
        unique: true
    }
});

citySchema.virtual("areas",{
    ref: 'Area',
    localField: "_id",
    foreignField: "city"
});

const City = mongoose.model('Area', citySchema)

module.exports = City;