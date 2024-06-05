"use client";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

function LikeBtn({ likes }) {
  const [isLike, setIsLike] = useState(false);

  const unlike = (e) => {
    e.preventDefault();
    setIsLike(false);
  };

  const like = (e) => {
    e.preventDefault();
    setIsLike(true);
  };
  return isLike ? (
    <button
      onClick={unlike}
      className="flex items-center tweet-btns__btn tweet-btns__like--active"
    >
      <AiFillHeart />
      <small>{likes.length}</small>
    </button>
  ) : (
    <button
      onClick={like}
      className="flex items-center tweet-btns__btn tweet-btns__like"
    >
      <AiOutlineHeart />
      <small>{likes.length}</small>
    </button>
  );
}

export default LikeBtn;
