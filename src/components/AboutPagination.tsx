"use client";

import React, { useRef,useState } from "react";
import AboutUs from "./AboutUs";
import { SwiperSlide, Swiper } from "swiper/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import SwiperCore, { type Swiper as SwiperRef } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import Container from "./Container";

const AboutPagination = () => {
  const swiperRef = useRef<SwiperRef>();
  const [pageCount,setPageCount] = useState<number>(1);
  return (
    <Container>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        

        allowTouchMove={false}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <AboutUs title="Who we are" subtitle="Technology Company" />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUs title="What we do" subtitle="Technology Company" />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUs title="How we do" subtitle="Technology Company" />
        </SwiperSlide>
        <div className="flex justify-between items-center px-4">
          <div >
            <span className="font-semibold text-xl ">0{pageCount}</span>
            <span className="px-1 text-gray-400">/</span>
            <span className="text-sm text-gray-400">
                03
            </span>
          </div>
          <div className="flex gap-x-2 items-center ">
            <button
            disabled={pageCount <= 1}
              className="bg-blue-400 text-white disabled:bg-gray-200 disabled:text-gray-400  w-8 grid place-items-center h-8 ml-4 shadow-sm"
              onClick={() => {
                swiperRef.current?.slidePrev()
                setPageCount(pageCount - 1)
            }}
            >
              <ArrowLeft />
            </button>
            <button
            disabled={pageCount >= 3}

              className="bg-blue-400 text-white disabled:text-gray-400 w-8 grid place-items-center h-8 mr-4 shadow-sm disabled:bg-gray-200"
              onClick={() => {
                swiperRef.current?.slideNext()
                setPageCount(pageCount + 1)

            }}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </Swiper>
    </Container>
  );
};

export default AboutPagination;
