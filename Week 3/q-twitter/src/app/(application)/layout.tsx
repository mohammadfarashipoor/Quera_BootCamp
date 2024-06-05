"use client";
import Menu from "@/views/Menu";
import SidebarRight from "@/views/SideBarRight";
import Header from "@/views/Header";
import { useEffect } from "react";
import { getFeed } from "@/containers/Feed/actions";
import { getUserInfo } from "@/containers/User/actions";
import setToken from "@/utils/token";
import { SET_AUTH } from "@/containers/Authentication/constants";
import { useDispatch } from "react-redux";
import { redirect } from "next/navigation";

function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      getFeed(username);
      getUserInfo();
    }
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      dispatch({ type: SET_AUTH });
    } else {
      redirect("/auth/signin");
    }
  }, []);
  return (
    <div className="layout flex justify-between">
      <Menu />
      <main id="main" className="main flex--2">
        <Header />
        {children}
      </main>
      <SidebarRight />
    </div>
  );
}

export default AppLayout;
