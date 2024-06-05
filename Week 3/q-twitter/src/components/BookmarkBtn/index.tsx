"use client";
import { MdOutlineBookmark, MdOutlineBookmarkBorder } from "react-icons/md";
import { useState } from "react";
function BookmarkBtn() {
  const [isBookmark, setIsBookmark] = useState(false);
  const remove = (e) => {
    e.preventDefault();
    setIsBookmark(false);
  };

  const add = (e) => {
    e.preventDefault();
    setIsBookmark(true);
  };
  return isBookmark ? (
    <button
      onClick={remove}
      className="flex items-center tweet-btns__btn tweet-btns__bookmark--active"
    >
      <MdOutlineBookmark />
    </button>
  ) : (
    <button
      onClick={add}
      className="flex items-center tweet-btns__btn tweet-btns__bookmark"
    >
      <MdOutlineBookmarkBorder />
    </button>
  );
}

export default BookmarkBtn;
