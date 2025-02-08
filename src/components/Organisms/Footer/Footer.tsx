import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-[172px] bg-colorSecondary relative flex justify-center items-center">
      <Link href="/" className="no-underline">
        <Image
          src="/logo/information.png"
          alt="Apply digital logo"
          width={1280}
          height={44}
          className="h-[44px] object-cover"
        />
      </Link>
    </footer>
  );
};

export default Footer;
