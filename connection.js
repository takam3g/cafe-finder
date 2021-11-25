const mongoose = require('mongoose');

let mongoDB = process.env.MONGODB_URL;

module.exports = mongoose.connect(mongoDB);