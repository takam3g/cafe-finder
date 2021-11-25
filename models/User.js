const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;


const UserSchema = new Schema({

    email: {
        type: String,
        required: [true, 'Please input your email'],
        validate: [
            {
                //if the email passed the validation, it will return true
                //if the email didn't pass the validation, it will goes to message
                validator: function (email) {
                    return validator.isEmail(email)
                },
                message: `Please input a valid email`,
            },

            {
                //if the count returns 0 (=false), will return !false = true, and it passes the validation
                //if the count returns 1 (=true), will return !true = false, and it fails the validation and return message
                validator: async function (email) {
                    const exists =
                        await mongoose.models.User.countDocuments({ email })
                    return !exists
                },

                message: (props) => `${props.value} already exist`,
            },
        ],
    },

    userName: {
        type: String,
        required: [true, 'Please input your user name'],
        minLength: 3,
        maxLength: 15,
    },

    profilePicture: {
        type: String,
        default: 'DefaultPicture',
    },

    password: {
        type: String,
        required: [true, 'Please input password'],
        minLength: 8,
    },

    likes: {
        type: [String],
    },

    //Followings are fpr future implementation only 
    // firstName: {
    //     type: String,
    //     required: [true, 'Please input your first name'],
    //     minLength: 2,
    //     maxLength: 15,
    // },

    // lastName: {
    //     type: String,
    //     required: [true, 'Please input your last name'],
    //     minLength: 2,
    //     maxLength: 15,
    // },

    // occupation: {
    //     type: String,
    //     maxLength: 15,
    // },

    // introduction: {
    //     type: String,
    //     maxLength: 1000,
    // }
});




const User = mongoose.model('User', UserSchema); 
module.exports = User;