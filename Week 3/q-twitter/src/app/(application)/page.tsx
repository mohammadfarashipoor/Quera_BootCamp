"use client";
import Spinner from "@/components/Spinner";
import TweetCard from "@/components/TweetCard";
import NewTweetForm from "@/views/NewTweetForm";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import actions from "@/lib/actions";
import { Tweet } from "@/containers/Tweet/type";

function Home(props: { feedState: { tweets: Tweet[]; username: string } }) {
  const [page, setPage] = useState(1);
  const { feedState } = props;
  return (
    <div className="home">
      <NewTweetForm />
      {feedState.tweets ? (
        <InfiniteScroll
          dataLength={feedState.tweets.length}
          next={() => setPage(page + 1)}
          scrollableTarget="main"
          hasMore={true}
          loader={<h4>صبر کنید...</h4>}
        >
          {feedState.tweets.map((tweet: Tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} isRetweeted={undefined} />
          ))}
        </InfiniteScroll>
      ) : (
        <div className="flex flex-col items-center">
          <div className="view-wrapper">
            <h1>آخ </h1>
            <p>هنوز چیزی نداری....</p>
          </div>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    feedState: state.feed.feedState,
    isLoading: state.feed.isLoading,
  };
};
export default connect(mapStateToProps, actions)(Home);
