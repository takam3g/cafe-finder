const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CafeSchema = new Schema({
    name:{
        type: String, 
        required: [true, 'Name field is required'],
        maxLength: 30
    },

    address:{
        type: String, 
        required: [true, 'Address field is required'], 
        maxLength: 50
    },

    city:{
        type: String, 
        required: [true, 'City field is required'],
        maxLength: 20
    },

    province:{
        type: String, 
        required: [true, 'Province field is required'], 
        minLength: 2,
        maxLength: 2
    },

    postalCode: {
        type: String,
        minLength: 6, 
        maxLength: 6,
        required: [true, 'Postal Code field is require'], 
    },

    nomadFriendly: {
        type: Number,
        enum: [0, 1, 2],
        required: [true, 'Nomad Friendly field is required'], 
    },

    outlet: {
        type: Number,
        enum: [0, 1, 2],
        required: [true, 'Outlet field is required'],
    },

    wifi: {
        type: Number,
        enum: [0, 1, 2],
        required: [true, 'Wifi field is required'],
    },

    noise: {
        type: Number,
        enum: [0, 1, 2],
        required: [true, 'Noise field is required'],
    },

    price: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, 'Price field is required'],
    },

    is24hs : {
        type: Boolean,
        required: [true, '24hs or not field is required'],
    },

    open: {
        type: String,
        required: [function(){return !this.is24hs;}, 'Open field is required if not 24hs'] // required only if is24hs was false
    },
    
    close: {
        type: String,
        required: [function(){return !this.is24hs;}, 'Close field is required if not 24hs'] // required only if is24hs was false
    },

    holiday: [{
        day: {
            type: String,
        },
        status: {
            type: Boolean,
        }
    }],

    picture: {
        type: String,
        default: 'defaultPicture',
    },

    // coordinate: {
    //     type: [Number],
    //     minLength: 2,
    //     maxLength: 2,
    //     default: [49.2247693,-123.1085496]
    // },

    // likes: {
    //     type: [String]  //future use if I added users 
    // }
},
//auto is making the collection name 'caves', so putting the name by own
{ collection: 'cafes'} 
);


//Combination of name and postalCode should be unique
CafeSchema.index({ name: 1, postalCode: 1 }, { unique: true })


const Cafe = mongoose.model('Cafe', CafeSchema); 
module.exports = Cafe;