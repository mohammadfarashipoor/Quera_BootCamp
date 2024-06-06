"use client";
import Profile from "@/views/Profile";
import { connect } from "react-redux";
import actions from "@/lib/actions";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { UserData } from "@/containers/User/type";
interface ProfilePageProps {
  userInfo: UserData;
  userState: UserData;
  getUser: (username: string) => void;
}
function ProfilePage(props: ProfilePageProps) {
  const { userInfo, userState, getUser } = props;
  const [profile, setProfile] = useState<UserData>();
  let currentProfile = false;
  const { username }: { username: string } = useParams();
  useEffect(() => {
    if (username !== userInfo.username && userInfo) {
      getUser(username);
      currentProfile = false;
      setProfile(userState);
    } else {
      currentProfile = true;
      setProfile(userInfo);
    }
  }, [userInfo]);
  return (
    <>
      {profile && <Profile profile={profile} currentProfile={currentProfile} />}
    </>
  );
}
const mapStateToProps = (state: any) => {
  return {
    userInfo: state.user.userInfo,
    userState: state.user.userState,
  };
};
export default connect(mapStateToProps, actions)(ProfilePage);
