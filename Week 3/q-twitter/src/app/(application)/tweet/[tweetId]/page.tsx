"use client";
import Tweet from "@/views/Tweet";
import { connect } from "react-redux";
import actions from "@/lib/actions";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Spinner from "@/components/Spinner";

interface TweetPageProps {
  tweet: Tweet;
  getTweet: (tweetId: string) => void;
  isLoading: boolean;
}
function TweetPage(props: TweetPageProps) {
  const { tweet, getTweet, isLoading } = props;
  const { tweetId }: { tweetId: string } = useParams();

  useEffect(() => {
    if (tweetId) {
      getTweet(tweetId);
    }
  }, []);
  return isLoading ? (
    <Spinner />
  ) : tweet ? (
    tweet && <Tweet tweet={tweet} tweetId={tweetId} />
  ) : (
    <div className="h-screen flex justify-center items-center text-white">
      <span>توییت پیدا نشد</span>
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    tweet: state.tweet?.tweetState?.thread[0],
    isLoading: state.tweet.isLoading,
  };
};
export default connect(mapStateToProps, actions)(TweetPage);
