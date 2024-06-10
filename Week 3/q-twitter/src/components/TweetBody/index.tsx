"use client";
import TweetCard from "../TweetCard";
import { useEffect, useState } from "react";
import { fetchTweet } from "@/containers/Tweet/actions";
import { Tweet } from "@/containers/Tweet/type";

function TweetBody({
  body,
  replyTweet,
  tags,
}: {
  body: string;
  tags: string[];
  replyTweet: string | null;
}) {
  const [originalTweet, setOriginalTweet] = useState<Tweet>();
  useEffect(() => {
    if (replyTweet) {
      fetchTweet(replyTweet)
        .then((res) => {
          const tweetReplay = res.thread.find(
            (tweet: Tweet) => tweet.id === replyTweet
          );
          setOriginalTweet(tweetReplay);
        })
        .catch((e) => console.log(e));
    }
  }, []);
  return (
    <div>
      <pre className="tweet__body">{body}</pre>
      {tags &&
        tags.map((tag: string) => <span className="tweet__tags">#{tag}</span>)}
      {replyTweet && originalTweet && (
        <TweetCard tweet={originalTweet} isRetweeted={!!originalTweet} />
      )}
    </div>
  );
}

export default TweetBody;
