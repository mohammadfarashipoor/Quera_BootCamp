import { configureStore } from "@reduxjs/toolkit";

export type Dispatch = ReturnType<typeof configureStore>["dispatch"];
