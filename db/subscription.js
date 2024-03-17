const mongoose = require("mongoose");
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);

const SubscriptionSchema = new mongoose.Schema({
    free: { type: String },
    basic: { type: String },
    premium: { type: String }
});

const Subscription = mongoose.model('Subscription', SubscriptionSchema);

module.exports = { Subscription };