"use client";
import { makeStore } from "@/lib/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";

export const StoreProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const storeRef: any = useRef;

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  useEffect(() => {
    if (storeRef.current != null) {
      // configure listeners using the provided defaults
      // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
      return setupListeners(storeRef.current.dispatch);
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};
