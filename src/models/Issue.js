const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    issue:{
        type: String,
        trim: true,
        required: true
    }
});


const Issue = mongoose.model('Issue', IssueSchema)

module.exports = Issue