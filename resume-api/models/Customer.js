const mongoose = require('mongoose'); 
const validator = require('validator'); 

let customerSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name is required"], 
        trim: true
    }, 
    email: {
        type: String, 
        required: [true, "Email is required"], 
        validate: [validator.isEmail, "Invalid email address"], 
        unique: true, 
        index: true,
        lowercase: true, 
        trim: true
    }, 
    phone: {
        type: String, 
        validate: {
            validator: function(v) {
                var re = /^\+?[0-9\s]{10,15}$/;
                return (!v || !v.trim().length) || re.test(v)
            },
            message: 'Invalid phone number'
        }
    },
    password: {
        type: String, 
        required: [true, "Password is required"]
    }, 
    isActive: {
        type: Boolean, 
        default: true, 
    }, 
    isVerified: {
        type: Boolean, 
        default: false
    }
}, {
    strict: false,
    timestamps: true, 
    versionKey: false
}); 

module.exports = mongoose.model('user', customerSchema); 