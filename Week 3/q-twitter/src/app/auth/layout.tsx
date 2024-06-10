"use client";
import Image from "next/image";
import bg from "@/assets/images/bg.png";
import { useEffect } from "react";
import { useRouter } from "next/router";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.replace("/");
    }
  }, []);
  return (
    <div className="auth">
      <div className="auth__form--wrapper">{children} </div>
      <Image className="hidden lg:block" src={bg} alt="" />
    </div>
  );
}

export default AuthLayout;
