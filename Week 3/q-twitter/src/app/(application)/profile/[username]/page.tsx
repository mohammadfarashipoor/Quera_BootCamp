"use client";
import Profile from "@/views/Profile";
import { connect } from "react-redux";
import actions from "@/lib/actions";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
function ProfilePage(props) {
  const { userInfo, userState, getUser } = props;
  const [profile, setProfile] = useState({});
  let currentProfile = null;
  const username = useParams();
  useEffect(() => {
    if (username.username !== userInfo.username && userInfo) {
      getUser(username.username);
      currentProfile = false;
      setProfile(userState);
    } else {
      currentProfile = true;
      setProfile(userInfo);
    }
  }, [userInfo]);
  return <Profile profile={profile} currentProfile={currentProfile} />;
}
const mapStateToProps = (state: any) => {
  return {
    userInfo: state.user.userInfo,
    userState: state.user.userState,
  };
};
export default connect(mapStateToProps, actions)(ProfilePage);
