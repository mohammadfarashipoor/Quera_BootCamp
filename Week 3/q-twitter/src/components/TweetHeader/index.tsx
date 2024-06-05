import getTweetTime from "@/utils/getTweetTime";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";

function TweetHeader({ author }) {
  return (
    <div className="flex justify-between items-center">
      <Link
        className="tweet__profile flex items-center"
        href={`/profile/${author?.username}`}
      >
        <p className="tweet__profile--name">{author?.name}</p>
        <p className="tweet__profile--username">@{author?.username} </p>
        {/* <p className="tweet__profile--time">{getTweetTime(createdAt)}</p> */}
      </Link>
    </div>
  );
}

export default TweetHeader;
