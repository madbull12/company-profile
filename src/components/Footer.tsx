"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import Select from "react-select";
const Footer = () => {
  const options = [
    { value: "Technology Department", label: "Technology Department" },

  ];
  return (
    <div className="relative h-96">
      <Image
        alt="Bg-footer"
        src="/assets/footer-bg.svg"
        width={0}
        height={0}
        sizes="100vw"
        className="object-center "
        style={{ width: "100%" }}
      />

      <div className="z-50 absolute top-0 p-4">
        <Image
          alt="logo"
          src="/assets/white-logo.png"
          width={200}
          height={150}
        />
        <div className="bg-white p-4 mt-8">
          <Select options={options} className="font-bold uppercase text-[#00537C]"  />
            <p className="mt-4 text-[#25A0D8]">Jl. Lembong No 8 <br /> Kel. Braga Kec. Sumur <br /> Bandung, Kota <br /> Bandung, Jawa Barat</p>
        </div>
        <ul className="space-y-4 md:space-y-0 mt-8 text-white  flex flex-col md:flex-row  items-start md:items-center gap-2">
            <li>
                <Link href="/">Who We Are</Link>
            </li>
            <li>
                <Link href="/">Our Values</Link>
            </li>
            <li>
                <Link href="/">The Perks</Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
