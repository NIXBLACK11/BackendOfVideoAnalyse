const { User } = require("../db/user");
const { Subscription } = require("../db/subscription");

async function checkSubscriptionLimit(req, res, next) {

    const userName = req.params.username;

    const user = await User.findOne({
        userName: userName
    });

    const userSubscription = user.userSubscription;
    const requestCount = user.userRequestCount;

    const subscriptionLimits = await Subscription.find({});


    try {
        const limitsObject = subscriptionLimits[0];
    
        if (limitsObject && userSubscription in limitsObject) {
            const maxRequests = parseInt(limitsObject[userSubscription]); // Parse limit as integer

            if (requestCount >= maxRequests) {
                console.log("request limit exceeded");
                return res.status(429).json({ message: "Request limit exceeded" });
            } else {
                user.userRequestCount=user.userRequestCount+1;
                await user.save();
                next();
            }
        } else {
            return res.status(400).json({ message: "Invalid subscription" });
        }
    } catch (error) {
        return res.status(400).json({ message: "Invalid subscription" });
    }
}

module.exports = { checkSubscriptionLimit };