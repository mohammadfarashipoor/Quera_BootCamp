"use client";
import { BsThreeDots } from "react-icons/bs";
import Avatar from "@/components/Avatar";
import { connect } from "react-redux";
import actions from "@/lib/actions";

function UserNameCard(props) {
  const { name, username, onClick } = props;
  return (
    <div className="sidebar-left__card flex justify-between" onClick={onClick}>
      <div className="flex items-center">
        <div className="sidebar-left__card--img flex justify-center items-center">
          <Avatar username={username} size="small" />
        </div>
        <div className="sidebar-left__card--info">
          <h3>{name}</h3>
          <small>@{username}</small>
        </div>
      </div>

      <BsThreeDots />
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    name: state.user.userInfo?.name,
    username: state.user.userInfo?.username,
  };
};
export default connect(mapStateToProps, actions)(UserNameCard);
