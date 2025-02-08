import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="px-32 py-5 max-sm:px-6 max-sm:py-2 h-[65px] w-full bg-colorSurface flex justify-between items-center">
        <li className="flex">
          <Link
            href="/"
            className="font-inter font-bold text-2xl no-underline text-tertiary"
          >
            GamerShop
          </Link>
        </li>
        <li className="flex">
          <Link href="/cart" className="no-underline">
            <Image
              src="/icons/cart-icon.svg"
              alt="Cart icon"
              width={24}
              height={24}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
