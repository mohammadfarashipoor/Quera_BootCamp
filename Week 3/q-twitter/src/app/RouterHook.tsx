"use client";
import routerHook from "@/utils/navigation";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function RouterHook({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  routerHook(router);
  return children;
}

export default RouterHook;
