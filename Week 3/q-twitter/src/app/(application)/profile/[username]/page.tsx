"use client";
import Profile from "@/views/Profile";
import { connect } from "react-redux";
import actions from "@/lib/actions";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { UserData } from "@/containers/User/type";
import { IoIosWarning } from "react-icons/io";
import Link from "next/link";
interface ProfilePageProps {
  userInfo: UserData;
  userState: UserData;
  getUser: (username: string) => void;
  followUser: (username: string) => void;
}
type EmptyObject = {};
function ProfilePage(props: ProfilePageProps) {
  const { userInfo, userState, getUser, followUser } = props;
  const [profile, setProfile] = useState<UserData | EmptyObject>({});
  const { username }: { username: string } = useParams();
  useEffect(() => {
    if (username !== userInfo.username) {
      getUser(username);
      setProfile(userState);
    } else {
      setProfile(userInfo);
    }
  }, [userInfo]);

  return (
    <>
      {Object.keys(profile).length !== 0 ? (
        <Profile
          profile={profile}
          currentUserId={userInfo.id}
          followUser={followUser}
        />
      ) : (
        <div className="flex items-center flex-col justify-center h-screen text-white">
          <IoIosWarning className="text-5xl" />
          <span>کاربر پیدا نشد</span>
          <Link className="p-3 bg-blue-400 m-3 rounded-md" href={"/search"}>
            بازگشت به جست و جو
          </Link>
        </div>
      )}
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
