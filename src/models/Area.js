const mongoose = require("mongoose");

const areaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true,
        lowercase:true
    },
    city: {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "City"
    }
});

areaSchema.virtual("restaurants",{
    ref: 'Restaurant',
    localField: "_id",
    foreignField: "area"
});

const Area = mongoose.model('Area', areaSchema)

module.exports = Area;