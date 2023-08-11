"use client";
import Image from "next/image";
import React from "react";
import HeroShape from "./HeroShape";
import { useMediaQuery } from "@/hooks/use-media-query";

const HeroComponent = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <section
        className={`relative w-full ${
          isDesktop ? "p-4  flex items-center gap-x-8" : ""
        }`}
      >
        <Image
          alt="hero-background"
          width={0}
          height={0}
          sizes="100vw"
          className="object-center "
          style={{ width: isDesktop ? "50%" : "100%", height: "75vh" }}
          src="/assets/hero-image.png"
        />
        <div className="hidden md:block">
          <p className="font-[500] text-[36px] leading-10 ">
            Discover Your Wonder
          </p>
          <p className="leading-6 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            architecto ullam atque dolorem molestiae debitis minima consectetur
            illum nisi ratione. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nostrum beatae laborum quasi fugiat repellat
            pariatur eligendi. Earum quam enim perspiciatis.
          </p>
        </div>
        <div></div>
      </section>
      {!isDesktop ? (
        <>
          <HeroShape />
          <div className="shape-divider-2">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className="shape-fill-2"
              ></path>
            </svg>
          </div>
        </>
      ) : null}
    </>
  );
};

export default HeroComponent;
