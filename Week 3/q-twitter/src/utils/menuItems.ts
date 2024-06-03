import { RiHome4Line } from "react-icons/ri";
import { FiHash, FiMail } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";

const sidebarLinks = [
  {
    text: "",
    path: "/",
    icon: FaTwitter,
    class: "twitter",
  },
  {
    text: "خانه",
    path: "/home",
    icon: RiHome4Line,
    class: "home",
  },
  {
    text: "وب",
    path: "/explore",
    icon: FiHash,
    class: "explore",
  },
  {
    text: "اطلاعیه ها",
    path: "/notifications",
    icon: IoMdNotificationsOutline,
    class: "notification",
  },
  {
    text: "پیام ها",
    path: "/messages",
    icon: FiMail,
    class: "message",
  },
  {
    text: "نشان شده ها",
    path: "/bookmarks",
    icon: BsBookmark,
    class: "bookmark",
  },

  {
    text: "پروفایل",
    path: "/profile/",
    icon: CgProfile,
    class: "profile",
  },
  {
    text: "توئیت ها",
    path: "/tweet",
    icon: "",
    class: "tweet",
  },
];

export default sidebarLinks;
