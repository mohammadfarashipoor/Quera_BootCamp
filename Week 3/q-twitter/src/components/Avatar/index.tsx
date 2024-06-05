import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
interface AcatarProps {
  [name: string]: string;
}
function Avatar(props: AcatarProps) {
  const { username, avatar, size }: AcatarProps = props;
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
