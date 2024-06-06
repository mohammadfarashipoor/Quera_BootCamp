import TweetCard from "@/components/TweetCard";
import { Tweet } from "@/containers/Tweet/type";
import NewTweetForm from "../NewTweetForm";

function Tweet({ tweet, tweetId }: { tweet: Tweet; tweetId: string }) {
  return (
    <div className="tweet-page">
      <TweetCard tweet={tweet} />
      <NewTweetForm replied={tweetId} />
    </div>
  );
}

export default Tweet;
