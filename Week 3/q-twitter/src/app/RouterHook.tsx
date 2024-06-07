"use client";
import routerHook from "@/utils/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function RouterHook({
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
  routerHook(router);
  return children;
}

export default RouterHook;
