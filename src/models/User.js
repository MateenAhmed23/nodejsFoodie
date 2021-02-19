const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

// const Transaction = require("./transaction");
const TokenSecret = "I am going to make this";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    // email: {
    //     type: String,
    //     unique: true,
    //     required: true,
    //     trim: true,
    //     lowercase: true,
    //     validate(value) {
    //         if (!validator.isEmail(value)) {
    //             throw new Error('Email is invalid')
    //         }
    //     }
    // },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    phoneNumber:{
        type:Number,
        required:true,
        minlength:11,
        trim:true
    },
    tokens:{
        type: [String],
        required: true
    }
});

userSchema.virtual("orders",{
    ref: 'Order',
    localField: "_id",
    foreignField: "user"
});

userSchema.virtual("issues",{
    ref: 'Issue',
    localField: "_id",
    foreignField: "user"
});

// userSchema.methods.toJSON = async function(){

//     console.log("Yooooooo");
//     const user = this;
//     const userObject = user.toObject();

//     console.log(userObject);
//     delete userObject.password
//     delete userObject.tokens
    
//     console.log(userObject);
//     return userObject
// }

userSchema.statics.findByCredentials = async (email,password)=>{

    const user = await User.findOne({email});
    if(!user)
    {
        throw new Error("Unable to Login");
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch)
    {
        throw new Error("Unable to Login");
    }
    return user;
}

userSchema.methods.generateToken = async function(){

    const user= this;
    const token = await jwt.sign({id: user._id.toString()}, TokenSecret);

    user.tokens.push(token);

    await user.save();
    return token;
}

userSchema.pre("save", async function(next){
    const user = this;

    if(user.isModified("password"))
    {
        user.password = await bcrypt.hash(user.password,8);
    }
    next();
});

// userSchema.pre("remove", async function(next){
//     const user= this;

//     await Transaction.deleteMany({user:user._id});

//     next();
// })

const User = mongoose.model('User', userSchema)

module.exports = User
