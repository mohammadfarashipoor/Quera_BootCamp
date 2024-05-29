const Tweet = require("../models/Tweet/methods.js");

function register({ app }, path = "/api/tweets/:tweet_id") {
	app.get(path, async function (req, res) {
		try {
			const { tweet_id } = req.params;
			const thread = await Tweet.getThread(tweet_id);
			res.send({ tweet_id, thread });
		} catch (err) {
			res.status(404).send({ message: "not found" });
		}
	});
}

module.exports = register;
