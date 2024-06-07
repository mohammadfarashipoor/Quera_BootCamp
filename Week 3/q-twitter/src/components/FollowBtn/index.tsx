import { UserType } from "@/containers/User/type";

const FollowBtn = ({
  username,
  followUser,
  currentUserId,
  followersUser,
}: {
  username: string;
  currentUserId: string;
  followersUser: UserType[];
  followUser: (username: string) => void;
}) => {
  function handleFollow(e: React.MouseEvent) {
    e.preventDefault();
    followUser(username);
  }
  function handleUnfollow(e: React.MouseEvent) {
    e.preventDefault();
  }
  return followersUser.find((user) => user.id === currentUserId) ? (
    <button className="follow-btn" onClick={(e) => handleFollow(e)}>
      Follow
    </button>
  ) : (
    <button className="follow-btn" onClick={(e) => handleUnfollow(e)}>
      Unfollow
    </button>
  );
};

export default FollowBtn;
