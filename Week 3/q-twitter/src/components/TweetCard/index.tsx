"use client";

import React from "react";
import Avatar from "../Avatar";
import TweetHeader from "../TweetHeader";
import TweetBody from "../TweetBody";
import TweetIcons from "../TweetIcons";
import { useRouter } from "next/navigation";

function TweetCard({ tweet, isRetweeted }) {
  const router = useRouter();

  function handleChangeRoute(route: string) {
    router.push(route);
  }
  return (
    <div
      className={`tweet flex ${isRetweeted && "tweet__retweet"}`}
      onClick={() => handleChangeRoute(`/tweet/${tweet._id}`)}
    >
      <div className="tweet__side--left">
        <Avatar
          username={tweet.author.username}
          avatar={tweet.author.avatar}
          size="small"
        />
      </div>
      <div className="tweet__side--right">
        <TweetHeader
          tweet={tweet}
          author={tweet.author}
          createdAt={tweet.createdAt}
        />
        <TweetBody body={tweet.body} originalTweet={tweet.originalTweet} />
        <TweetIcons tweet={tweet} className={isRetweeted && "hidden"} />
      </div>
    </div>
  );
}

export default TweetCard;
