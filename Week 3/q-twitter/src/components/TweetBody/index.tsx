"use client";
import TweetCard from "../TweetCard";
import { useEffect, useState } from "react";
import { getTweet } from "@/containers/Tweet/actions";

function TweetBody({ body, replyTweet }) {
  const [originalTweet, setOriginalTweet] = useState();
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
      {replyTweet && (
        <TweetCard tweet={originalTweet} isRetweeted={originalTweet} />
      )}
    </div>
  );
}

export default TweetBody;
