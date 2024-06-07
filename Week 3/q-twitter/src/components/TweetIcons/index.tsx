import React from "react";
import BookmarkBtn from "../BookmarkBtn";
import LikeBtn from "../LikeBtn";
import RetweetBtn from "../RetweetBtn";
import ReplyBtn from "../ReplyBtn";
import { connect } from "react-redux";
import actions from "@/lib/actions";
import { UserData } from "@/containers/User/type";
import DeleteBtn from "../DeteleBtn";
interface TweetIconsProps {
  reply: string | null;
  likes: string[] | undefined;
  className: string;
  tweetId: string;
  currentUser: UserData;
  tweetUser: UserData;
  likeTweet: (tweetId: string) => void;
  deleteTweet: (tweetId: string) => void;
}

function TweetIcons({
  reply,
  likes,
  className,
  tweetId,
  likeTweet,
  tweetUser,
  currentUser,
  deleteTweet,
}: TweetIconsProps) {
  return (
    <div className={`tweet__icons flex justify-between ${className}`}>
      <ReplyBtn replies={reply ? 1 : 0} />
      <RetweetBtn retweets={0} />
      <LikeBtn
        tweetId={tweetId}
        likes={likes ?? []}
        likeTweet={likeTweet}
        currentUserId={currentUser.id}
      />
      <BookmarkBtn />
      <DeleteBtn
        tweetId={tweetId}
        tweetUserId={tweetUser.id}
        currentUserId={currentUser.id}
        deleteTweet={deleteTweet}
      />
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    currentUser: state.user.userInfo,
  };
};
export default connect(mapStateToProps, actions)(TweetIcons);
