"use client"


import React from "react";

const HeroShape = () => {
  return (
    <div>
      <div className="shape-divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="z-[9999]  absolute bottom-24 p-4  text-white">
        <p className="font-[500] text-[36px] leading-10 ">
          Discover <br /> Your Wonder
        </p>
        <p className="leading-6 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          architecto ullam atque dolorem molestiae debitis minima consectetur
          illum nisi ratione.
        </p>
      </div>
    </div>
  );
};

export default HeroShape;
