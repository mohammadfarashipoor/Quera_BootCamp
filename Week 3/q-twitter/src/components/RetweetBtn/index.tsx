import { AiOutlineRetweet } from "react-icons/ai";

function RetweetBtn({ retweets }) {
  const retweet = (e) => {
    e.preventDefault();
    // dispatch(newRetweet(id));
  };
  return (
    <button
      onClick={retweet}
      className="flex items-center tweet-btns__btn tweet-btns__retweet"
    >
      <AiOutlineRetweet />
      <small>{retweets}</small>
    </button>
  );
}

export default RetweetBtn;
