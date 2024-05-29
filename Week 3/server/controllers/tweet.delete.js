const Tweet = require("../models/Tweet/methods");

function register({ app, auth }, path = "/api/delete_tweet") {
	app.delete(path, auth.validateToken, async function (req, res) {
		try {
			const { tweet_id } = req.body;
			const tweet = await Tweet.getById(tweet_id);
			if (tweet === null) {
				return res.status(404);
			}
			tweet
				.remove()
				.then(() => res.status(204))
				.catch(() => res.status(400));
		} catch (err) {
			return res.status(400).send({ error: err });
		}
	});
}

module.exports = register;
