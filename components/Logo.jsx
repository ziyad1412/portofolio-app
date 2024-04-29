import { Link } from "lucide-react";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" width={54} height={54} priority alt="logo"></Image>
    </Link>
  );
};

export default Logo;
