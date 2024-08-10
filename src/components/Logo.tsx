import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-end gap-2">
      <Image
        className="w-[120px] h-[60px]"
        src="/Frame 4 (4).png"
        width={120}
        height={70}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
