const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CafeSchema = new Schema({
    name:{
        type: String, 
        required: true, 
        maxLength: 30
    },

    address:{
        type: String, 
        required: true, 
        maxLength: 50
    },

    city:{
        type: String, 
        required: true, 
        maxLength: 20
    },

    zip: {
        type: String,
        minLength: 6, 
        maxLength: 6,
        required: true,
    },

    coordinate: {
        type: [Number],
        maxItems: 2,
    },

    outlet: {
        type: String,
        enum: ['Not Available', 'Available', 'Many'],
        default: 'Not Available'
    },

    wifi: {
        type: String,
        enum: ['Not Available', 'Available', 'Stable'],
        default: 'Not Available'
    },

    noise: {
        type: String,
        enum: ['Noisy', 'Moderate', 'Quiet'],
        default: 'Not Available'
    },

    nomadFriendly: {
        type: String,
        enum: ['Not friendly', 'Neutral', 'Friendly'],
        default: 'Neutral'
    },

    price: {
        type: Number,
        min: 0,
        default: 0.00
    },

    hours: {
        open: {
            type: String,
            default: '09:00'
        },
        close: {
            type: String,
            default: '20:00'
        }
    },

    closed: {
        type: String,
        enum: ['Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 
    },

    pictures: {
        type: [String],
        default: 'DefaultPicture'
    },

    likes: {
        type: [String]  //future use if I added users 
    }
},
//auto is making the collection name 'caves', so putting the name by own
{ collection: 'cafes'} 
);




const Cafe = mongoose.model('Cafe', CafeSchema); 
module.exports = Cafe;