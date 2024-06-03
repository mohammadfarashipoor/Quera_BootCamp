import { BsThreeDots } from "react-icons/bs";
import Avatar from "@/components/Avatar";
function UserNameCard({ onClick }) {
  const data = {
    fname: "mohammad",
    username: "MeeM",
    avatar: "",
  };
  const { fname, username, avatar } = data;
  return (
    <div className="sidebar-left__card flex justify-between" onClick={onClick}>
      <div className="flex items-center">
        <div className="sidebar-left__card--img flex justify-center items-center">
          <Avatar username={username} avatar={avatar} size="small" />
        </div>
        <div className="sidebar-left__card--info">
          <h3>{fname}</h3>
          <small>@{username}</small>
        </div>
      </div>

      <BsThreeDots />
    </div>
  );
}

export default UserNameCard;
