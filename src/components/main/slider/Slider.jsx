"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        loop={true}
        slidesPerView={3}
      >
        <SwiperSlide>
          <div className="h-[50vh] relative">
            <Image
              className="w-full h-full object-cover"
              fill
              src="/slider/main_1.jpg"
              alt=""
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] relative">
            <Image
              className="w-full h-full object-cover"
              fill
              src="/slider/main_2.jpg"
              alt=""
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] relative">
            <Image
              className="w-full h-full object-cover"
              fill
              src="/slider/main_3.jpg"
              alt=""
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] relative">
            <Image
              className="w-full h-full object-cover"
              fill
              src="/slider/main_4.jpg"
              alt=""
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] relative">
            <Image
              className="w-full h-full object-cover"
              fill
              src="/slider/main_5.jpg"
              alt=""
            ></Image>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
