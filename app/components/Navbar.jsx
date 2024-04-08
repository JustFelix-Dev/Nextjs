import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div>
        <Image
          src="/logo.png"
          width={60}
          height={60}
          alt="my-logo"
          placeholder="blur"
          blurDataURL="hello"
          quality={100}
        />
      </div>
      <h1>Felix-HelpDesk</h1>
      <div className="flex gap-2">
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </div>
    </nav>
  );
};

export default Navbar;
