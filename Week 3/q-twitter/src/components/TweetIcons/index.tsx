import React from "react";
import BookmarkBtn from "../BookmarkBtn";
import LikeBtn from "../LikeBtn";
import RetweetBtn from "../RetweetBtn";
import ReplyBtn from "../ReplyBtn";

function TweetIcons({ tweet, className }) {
  return (
    <div className={`tweet__icons flex justify-between ${className}`}>
      <ReplyBtn replies={tweet.replies.length} />
      <RetweetBtn id={tweet._id} retweets={tweet.retweets.length} />
      <LikeBtn id={tweet._id} likes={tweet.likes} />
      <BookmarkBtn id={tweet._id} />
    </div>
  );
}

export default TweetIcons;
