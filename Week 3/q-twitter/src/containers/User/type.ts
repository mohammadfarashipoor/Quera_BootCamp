import { Tweet } from "../Tweet/type";

export interface UserType {
  username: string;
  name: string;
  biography: string;
  id: string;
}
export interface UserData extends UserType {
  tweets: Tweet[];
  followings: UserType[];
  followers: UserType[];
}
