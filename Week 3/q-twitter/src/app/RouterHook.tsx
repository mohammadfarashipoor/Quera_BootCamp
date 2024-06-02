"use client";
import routerHook from "@/utils/navigation";
import { useRouter } from "next/navigation";

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
