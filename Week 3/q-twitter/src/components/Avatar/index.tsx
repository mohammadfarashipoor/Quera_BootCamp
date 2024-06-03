import Link from "next/link";
import { FaTwitter } from "react-icons/fa";

function Avatar({ username, avatar, size }) {
  return (
    <Link
      href={`/profile/${username}`}
      className={`avatar avatar__${size} flex items-center justify-center`}
    >
      {avatar ? (
        <img src={`${avatar}?${Date.now()}`} alt="avatar" loading="lazy" />
      ) : (
        <FaTwitter />
      )}
    </Link>
  );
}

export default Avatar;
