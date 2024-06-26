import { FaRegComment } from "react-icons/fa";

function ReplyBtn({ replies }: { replies: number }) {
  return (
    <div className="flex items-center tweet-btns__btn tweet-btns__reply">
      <FaRegComment />
      <small>{replies}</small>
    </div>
  );
}

export default ReplyBtn;
