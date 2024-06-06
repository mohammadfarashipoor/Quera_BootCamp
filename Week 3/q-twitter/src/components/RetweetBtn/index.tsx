import { AiOutlineRetweet } from "react-icons/ai";

function RetweetBtn({ retweets }: { retweets: number }) {
  const retweet = () => {};
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
