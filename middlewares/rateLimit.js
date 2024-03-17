const rateLimit = require('express-rate-limit');;

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, 
	max: 10,
    message: "Hold on their, maybe get a life instead of spamming my api.",
	standardHeaders: true,
	legacyHeaders: true, 
    skipFailedRequests: false
});

module.exports = limiter;