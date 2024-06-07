import Avatar from "@/components/Avatar";
import EditBtn from "@/components/EditBtn";
import FollowBtn from "@/components/FollowBtn";
import TweetCard from "@/components/TweetCard";
import { UserData } from "@/containers/User/type";
import { BsCalendar3 } from "react-icons/bs";
import { IoMdLink } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

function Profile(props: {
  profile: UserData;
  currentUserId: string;
  followUser: (username: string) => void;
}) {
  const { profile, currentUserId, followUser } = props;
  const { id, username, followers, name, biography, followings, tweets } =
    profile;
  return (
    <div className="profile-card">
      <div className="profile-card__banner">
        {/* <img src="" alt="banner" /> */}
      </div>
      <div className="profile-card__bio">
        <div className=" flex  items-center justify-between">
          <div className="profile-card__bio--img flex justify-center items-center">
            <Avatar size="large" username={username} />
          </div>
          {id === currentUserId ? (
            <EditBtn />
          ) : (
            <FollowBtn
              username={username}
              followUser={followUser}
              currentUserId={id}
              followersUser={followers}
            />
          )}
        </div>
        <h3>{name}</h3>
        <small>@{username}</small>
        <p>{biography}</p>

        <ul className="flex">
          <li className="flex items-center">
            <MdLocationOn />
          </li>
          <li className="flex items-center">
            <IoMdLink />
          </li>
          <li className="flex items-center">
            <BsCalendar3 /> Joined
          </li>
        </ul>
        <div className="profile-card__bio--follow flex">
          <p>
            <span>{followings?.length ?? "0"}</span> Folowing
          </p>
          <p>
            <span>{followers?.length ?? "0"}</span> Followers
          </p>
        </div>
      </div>
      <div className="profile-card__tweets flex justify-center">Tweets</div>
      {tweets &&
        tweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} isRetweeted={false} />
        ))}
    </div>
  );
}

export default Profile;
