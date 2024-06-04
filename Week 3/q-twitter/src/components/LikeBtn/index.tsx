import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function LikeBtn({ id, likes }) {
  const { data } = { data: { _id: "" } };

  const unlike = (e) => {
    e.preventDefault();
    // dispatch(unlikeTweet(id));
  };

  const like = (e) => {
    e.preventDefault();
    // dispatch(likeTweet(id));
  };
  return likes.some((like) => like._id === data._id) ? (
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
