"use client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
function LikeBtn({
  likes,
  tweetId,
  currentUserId,
  likeTweet,
}: {
  likes: string[];
  tweetId: string;
  currentUserId: string;
  likeTweet: (tweetId: string) => void;
}) {
  const [isLike, setIsLike] = useState(false);

  const unlike = (e: React.MouseEvent) => {
    e.preventDefault();
    likeTweet(tweetId);
  };

  const like = (e: React.MouseEvent) => {
    e.preventDefault();
    likeTweet(tweetId);
  };
  function handleCheck() {
    likes.map((userId) => {
      if (userId === currentUserId) {
        setIsLike(true);
      } else {
        setIsLike(false);
      }
    });
  }
  useEffect(() => {
    handleCheck();
  }, [likes, currentUserId]);
  return isLike ? (
    <button
      onClick={(e) => unlike(e)}
      className="flex items-center tweet-btns__btn tweet-btns__like--active"
    >
      <AiFillHeart />
      <small>{likes.length}</small>
    </button>
  ) : (
    <button
      onClick={(e) => like(e)}
      className="flex items-center tweet-btns__btn tweet-btns__like"
    >
      <AiOutlineHeart />
      <small>{likes.length}</small>
    </button>
  );
}

export default LikeBtn;
