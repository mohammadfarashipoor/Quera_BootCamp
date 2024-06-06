"use client";
import Menu from "@/views/Menu";
import SidebarRight from "@/views/SideBarRight";
import Header from "@/views/Header";
import { useEffect } from "react";
import setToken from "@/utils/token";
import { SET_AUTH } from "@/containers/Authentication/constants";
import { useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { connect } from "react-redux";
import actions from "@/lib/actions";
function AppLayout(props) {
  const { username, getFeed, getUserInfo, children } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token) {
      setToken(token);
      dispatch({ type: SET_AUTH });
    } else {
      redirect("/auth/signin");
    }
    if (username) {
      getFeed(username);
      getUserInfo();
    }
  }, []);

  return (
    <div className="layout flex justify-between">
      <Menu username={username} />
      <main id="main" className="main flex--2">
        <Header />
        {children}
      </main>
      {/* <SidebarRight /> */}
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    username: state.user?.userInfo.username,
  };
};
export default connect(mapStateToProps, actions)(AppLayout);
