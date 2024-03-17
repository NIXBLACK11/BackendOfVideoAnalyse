const mongoose = require("mongoose");
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);

const UserSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPassword: { type: String, required: true },
    userSubscription: { type: String, default: "free" },
    userRequestCount: { type: Number, default: "0" },
    userVideos: [{
        type: mongoose.Types.ObjectId,
        ref: 'Video'
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };