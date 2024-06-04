import getTweetTime from "@/utils/getTweetTime";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";

function TweetHeader({ author, createdAt, tweet }) {
  const { username } = { username: "MeeM" };
  const handleClick = (e) => {
    e.preventDefault();
    // dispatch(toggleTweetEditorModal(tweet));
  };
  return (
    <div className="flex justify-between items-center">
      <Link
        className="tweet__profile flex items-center"
        href={`/profile/${author.username}`}
      >
        <p className="tweet__profile--name">{author.fname}</p>
        <p className="tweet__profile--username">@{author.username} </p>
        <p className="tweet__profile--time">{getTweetTime(createdAt)}</p>
      </Link>
      {username === author.username && (
        <BsThreeDots className="tweet-btns__btn" onClick={handleClick} />
      )}
    </div>
  );
}

export default TweetHeader;
