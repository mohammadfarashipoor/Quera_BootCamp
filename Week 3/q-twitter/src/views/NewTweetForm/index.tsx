"use client";
import Avatar from "@/components/Avatar";
import TextareaAutosize from "react-textarea-autosize";
import { FaFileImage } from "react-icons/fa";
import { RiFileGifLine } from "react-icons/ri";
import { GrEmoji } from "react-icons/gr";
import { connect } from "react-redux";
import actions from "@/lib/actions";
function NewTweetForm(props) {
  const { newTweet, tweetChange, tweetForm, username, avatar, formErrors } =
    props;
  const handleSubmit = (e) => {
    e.preventDefault();
    newTweet();
    e.target.reset();
  };
  return (
    <div className="tweet-form flex items-start">
      <div className="tweet-form__img flex justify-center items-center">
        <Avatar username={username} avatar={avatar} size="small" />
      </div>
      <form className="tweet-form__form" onSubmit={handleSubmit}>
        <TextareaAutosize
          name="body"
          placeholder="چه اتفاقی افتاده؟؟؟"
          value={tweetForm.body}
          onChange={(e) => {
            tweetChange(e.target.name, e.target.value);
          }}
        />
        <span className="invalid-message">
          {formErrors["body"] && formErrors["body"][0]}
        </span>
        <input
          name="tags"
          placeholder="تگ ها"
          value={tweetForm.tags}
          onChange={(e) => {
            tweetChange(e.target.name, e.target.value);
          }}
        />
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
const mapStateToProps = (state: any) => {
  return {
    username: "state.user.username",
    avatar: "",
    tweetForm: state.tweet.tweetForm,
    formErrors: state.tweet.formErrors,
    isLoading: state.tweet.isLoading,
  };
};
export default connect(mapStateToProps, actions)(NewTweetForm);
