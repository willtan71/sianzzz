"use client";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  // const handleLogoClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <Link
      href="/"
      // onClick={handleLogoClick}
      className="font-normal flex space-x-2 items-center text-base mr-4 text-black px-2 py-1 relative z-20"
    >
      <div className="h-6 w-7 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
      <span className="font-medium text-lg text-black dark:text-white">Sianzzz Consultancy</span>
    </Link>
  );
};
