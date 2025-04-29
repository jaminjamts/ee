import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="mx-auto container flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link href={"/"}>home</Link>
      <Link href={"/"}>menu</Link>
      <Link href={"/"}>home</Link>
      <Link href={"/"}>home</Link>
    </div>
  );
};

export default Navbar;
