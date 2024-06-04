"use client";
import Spinner from "@/components/Spinner";
import TweetCard from "@/components/TweetCard";
import NewTweetForm from "@/views/NewTweetForm";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [page, setPage] = useState(1);
  const tweetState = {
    modifiedTweet: "",
    followingTweets: [
      {
        _id: "",
        author: { username: "Meem", avatar: "" },
        replies: [],
        retweets: [],
        likes: [{ _id: "" }],
      },
    ],
    newTweet: "",
    newRetweet: "",
  };
  const { modifiedTweet, followingTweets, newTweet, newRetweet } = tweetState;

  useEffect(() => {
    // dispatch(getFollowingTweets(page));
  }, [page, modifiedTweet, newTweet, newRetweet]);

  return (
    <div className="home">
      <NewTweetForm />
      {followingTweets ? (
        followingTweets.length > 0 ? (
          <InfiniteScroll
            dataLength={followingTweets.length}
            next={() => setPage(page + 1)}
            scrollableTarget="main"
            hasMore={true}
            loader={<h4>صبر کنید...</h4>}
          >
            {followingTweets.map((tweet, idx) => (
              <TweetCard key={tweet._id} tweet={tweet} isRetweeted={false} />
            ))}
          </InfiniteScroll>
        ) : (
          <div className="flex flex-col items-center">
            <div className="view-wrapper">
              <h1>آخ مشکلی پیش اومده</h1>
              <p>هنوز چیزی نداری....</p>
            </div>
          </div>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}
