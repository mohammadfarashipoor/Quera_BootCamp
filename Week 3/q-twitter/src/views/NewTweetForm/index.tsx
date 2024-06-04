import Avatar from "@/components/Avatar";
import TextareaAutosize from "react-textarea-autosize";
import getFormData from "@/utils/getFormData";
import { FaFileImage } from "react-icons/fa";
import { RiFileGifLine } from "react-icons/ri";
import { GrEmoji } from "react-icons/gr";

function NewTweetForm() {
  const { username, avatar } = {
    username: "MeeM",
    avatar: "",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    // dispatch(newTweet(formData));
    e.target.reset();
  };
  return (
    <div className="tweet-form flex items-start">
      <div className="tweet-form__img flex justify-center items-center">
        <Avatar username={username} avatar={avatar} size="small" />
      </div>
      <form className="tweet-form__form" onSubmit={handleSubmit}>
        <TextareaAutosize name="body" placeholder="چه اتفاقی افتاده؟؟؟" />
        <div className="flex justify-between items-center">
          <ul className="flex">
            <li>
              <FaFileImage />
            </li>
            <li>
              <RiFileGifLine />
            </li>
            <li>
              <GrEmoji />
            </li>
          </ul>
          <button className="tweet-form__btn">توییت</button>
        </div>
      </form>
    </div>
  );
}

export default NewTweetForm;
