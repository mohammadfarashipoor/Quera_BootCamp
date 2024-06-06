"use client";
import Tweet from "@/views/Tweet";
import { connect } from "react-redux";
import actions from "@/lib/actions";
import { useEffect } from "react";
import { useParams } from "next/navigation";

interface TweetPageProps {
  tweet: Tweet;
  getTweet: any;
}
function TweetPage(props: TweetPageProps) {
  const { tweet, getTweet } = props;
  const { tweetId }: { tweetId: string } = useParams();

  useEffect(() => {
    if (tweetId) {
      getTweet(tweetId);
    }
  }, []);
  return tweet && <Tweet tweet={tweet} tweetId={tweetId} />;
}
const mapStateToProps = (state: any) => {
  return {
    tweet: state.tweet?.tweetState?.thread[0],
  };
};
export default connect(mapStateToProps, actions)(TweetPage);
