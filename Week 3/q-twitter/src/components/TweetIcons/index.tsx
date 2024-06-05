import React from "react";
import BookmarkBtn from "../BookmarkBtn";
import LikeBtn from "../LikeBtn";
import RetweetBtn from "../RetweetBtn";
import ReplyBtn from "../ReplyBtn";
interface TweetIconsProps {
  reply: string[];
  likes: string[];
  className: string;
}

function TweetIcons({ reply, likes, className }: TweetIconsProps) {
  return (
    <div className={`tweet__icons flex justify-between ${className}`}>
      <ReplyBtn replies={reply?.length ?? 0} />
      <RetweetBtn retweets={0} />
      <LikeBtn likes={likes ?? []} />
      <BookmarkBtn />
    </div>
  );
}

export default TweetIcons;
