import Image from "next/image";
import bg from "@/assets/images/bg.png";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth">
      <div className="auth__form--wrapper">{children} </div>
      <Image className="hidden lg:block" src={bg} alt="" />
    </div>
  );
}

export default AuthLayout;
