import Avatar from "../Avatar";
import TweetHeader from "../TweetHeader";
import TweetBody from "../TweetBody";
import TweetIcons from "../TweetIcons";
import { Tweet } from "@/containers/Tweet/type";
import { useRouter } from "next/navigation";

function TweetCard({
  tweet,
  isRetweeted,
}: {
  tweet: Tweet;
  isRetweeted?: boolean;
}) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/tweet/${tweet.id}`)}
      className={`tweet flex ${isRetweeted && "tweet__retweet"}`}
    >
      <div className="tweet__side--left">
        <Avatar username={tweet.user?.username} size="small" />
      </div>
      <div className="tweet__side--right">
        <TweetHeader author={tweet.user} />
        <TweetBody body={tweet.body} replyTweet={tweet.reply} />
        <TweetIcons
          reply={tweet.reply}
          tweetId={tweet.id}
          likes={tweet.likes}
          className={`${isRetweeted && "hidden"}`}
        />
      </div>
    </div>
  );
}

export default TweetCard;
