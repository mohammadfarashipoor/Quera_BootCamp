import React from "react";
import BookmarkBtn from "../BookmarkBtn";
import LikeBtn from "../LikeBtn";
import RetweetBtn from "../RetweetBtn";
import ReplyBtn from "../ReplyBtn";
import { connect } from "react-redux";
import actions from "@/lib/actions";
import { UserData } from "@/containers/User/type";
interface TweetIconsProps {
  reply: string | null;
  likes: string[] | undefined;
  className: string;
  tweetId: string;
  currentUser: UserData;
  likeTweet: (tweetId: string) => void;
}

function TweetIcons({
  reply,
  likes,
  className,
  tweetId,
  likeTweet,
  currentUser,
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
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    currentUser: state.user.userInfo,
  };
};
export default connect(mapStateToProps, actions)(TweetIcons);
