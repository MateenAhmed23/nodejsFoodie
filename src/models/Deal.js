const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    restaurantName: {
        type: String,
        required: true,
        trim:true
    },
    area: {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Area"
    },
    type: {
        type: String,
        required: true,
        trim:true
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

const Deal = mongoose.model('Deal', dealSchema)

module.exports = Deal;