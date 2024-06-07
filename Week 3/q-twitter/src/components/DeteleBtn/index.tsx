import { MdDelete } from "react-icons/md";
interface DeleteBtnProps {
  tweetId: string;
  tweetUserId: string;
  currentUserId: string;
  deleteTweet: (tweetId: string) => void;
}
function DeleteBtn({
  tweetId,
  tweetUserId,
  currentUserId,
  deleteTweet,
}: DeleteBtnProps) {
  const handleDelete = () => {
    deleteTweet(tweetId);
  };
  return tweetUserId === currentUserId ? (
    <button
      onClick={handleDelete}
      className="flex items-center tweet-btns__btn tweet-btns__bookmark"
    >
      <MdDelete className="text-2xl  hover:text-red-500 transition-colors" />
    </button>
  ) : null;
}

export default DeleteBtn;
