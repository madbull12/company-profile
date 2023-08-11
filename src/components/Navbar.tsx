"use client";

import React from "react";
import SheetComponent from "./SheetComponent";
import { useMediaQuery } from "@/hooks/use-media-query";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

const Navbar: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Container>
      <nav className=" flex items-center justify-between relative z-[999]">
        <Image
          alt="logo"
          width={150}
          className="object-cover"
          height={150}
          src="/assets/company-logo.png"
        />
        {!isDesktop ? <SheetComponent /> : null}
        {isDesktop ? (
          <ul className="flex w-1/3 items-center justify-around">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Values</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        ) : null}
      </nav>
    </Container>
  );
};

export default Navbar;
