"use client";

import Image from "next/image";
import Link from "next/link";

interface BreadcrumbProps {
  textContent: string;
  href: string;
}

const Breadcrumb = ({ textContent, href }: BreadcrumbProps) => {
  return (
    <div>
      <Link href={href} className="flex no-underline">
        <Image
          src="/icons/arrow-left.svg"
          alt="Breadcrumb icon"
          width={24}
          height={24}
        />
        <p className={`font-archivo text-base font-medium`}>{textContent}</p>
      </Link>
    </div>
  );
};

export default Breadcrumb;
