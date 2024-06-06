"use client";
import TweetCard from "../TweetCard";
import { useEffect, useState } from "react";
import { getTweet } from "@/containers/Tweet/actions";
import { Tweet } from "@/containers/Tweet/type";

function TweetBody({
  body,
  replyTweet,
}: {
  body: string;
  replyTweet: string | null;
}) {
  const [originalTweet, setOriginalTweet] = useState<Tweet>();
  useEffect(() => {
    if (replyTweet) {
      getTweet(replyTweet).then((res) => {
        setOriginalTweet(res);
      });
    }
  }, []);
  return (
    <div>
      <pre className="tweet__body">{body}</pre>
      {replyTweet && originalTweet && (
        <TweetCard tweet={originalTweet} isRetweeted={!!originalTweet} />
      )}
    </div>
  );
}

export default TweetBody;
