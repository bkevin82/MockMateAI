"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src="/5.1.png" width={160} height={100} alt="logo" />
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path == "/dashboard" && "text-primary font-bold"}    
        `}
        >
          <Link href="/dashboard"> Dashboard</Link>
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path == "/resources-page" && "text-primary font-bold"}    
        `}
        >
          <Link href="/resources-page">Career Guide</Link>
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path == "/how-it-work" && "text-primary font-bold"}    
        `}
        >
          {/* How it works */}
          <Link href="/how-it-work">How it works</Link>
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path == "/upgrade" && "text-primary font-bold"}  
        `}
        >
          <Link href="/upgrade">Upgrade</Link>
        </li>
        {/* <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path == "/upgrade" && "text-primary font-bold"}    
          `}
        >
          <Link href="/upgrade">Upgrade</Link>
        </li> */}
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
