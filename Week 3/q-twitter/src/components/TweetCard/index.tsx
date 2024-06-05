import Avatar from "../Avatar";
import TweetHeader from "../TweetHeader";
import TweetBody from "../TweetBody";
import TweetIcons from "../TweetIcons";

function TweetCard({ tweet, isRetweeted }) {
  return (
    <div className={`tweet flex ${isRetweeted && "tweet__retweet"}`}>
      <div className="tweet__side--left">
        <Avatar username={tweet.user?.username} size="small" />
      </div>
      <div className="tweet__side--right">
        <TweetHeader author={tweet.user} />
        <TweetBody body={tweet.body} replyTweet={tweet.reply} />
        <TweetIcons
          reply={tweet.reply}
          likes={tweet.likes ?? 0}
          className={isRetweeted && "hidden"}
        />
      </div>
    </div>
  );
}

export default TweetCard;
