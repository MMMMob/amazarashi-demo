import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

const topImgs = [
  {
    id: 1,
    data: [
      "/img/ia_200000113.jpg",
      "/img/ia_200000115.jpg",
      "/img/ia_200000116.jpg",
      "/img/ia_200000118.jpg",
      "/img/ia_200000119.jpg",
      "/img/ia_200000122.jpg",
      "/img/ia_200000124.jpg",
      "/img/ia_200000152.jpg",
      "/img/ia_200000125.jpg",
      "/img/ia_200000356.jpg",
      "/img/ia_200000128.jpg",
      "/img/ia_200000130.jpg",
      "/img/ia_200000131.jpg",
      "/img/ia_200000133.jpg",
      "/img/ia_200000134.jpg",
      "/img/ia_200000136.jpg",
      "/img/ia_200000137.jpg",
      "/img/ia_200000139.jpg",
      "/img/ia_200000157.jpg",
      "/img/ia_200000143.jpg",
    ],
    width: 480,
    height: 480,
    slidesPerView: 3,
    autoplayDelay: 1000,
  },
  {
    id: 2,
    data: [
      "/img/ia_100000408.png",
      "/img/ia_100000409.png",
      "/img/ia_100000410.png",
      "/img/ia_100000411.png",
      "/img/ia_100000412.png",
      "/img/ia_100000413.jpg",
      "/img/ia_100000414.jpg",
      "/img/ia_100000415.jpg",
      "/img/ia_100000416.jpg",
      "/img/ia_100000417.jpg",
      "/img/ia_100000418.jpg",
      "/img/ia_100000419.png",
      "/img/ia_100000420.jpg",
      "/img/ia_100000421.png",
      "/img/ia_100000422.png",
      "/img/ia_100000423.png",
      "/img/ia_100000424.png",
    ],
    width: 256,
    height: 144,
    slidesPerView: 5,
    autoplayDelay: 1500,
  },
  {
    id: 3,
    data: [
      "/img/ia_100000290.jpg",
      "/img/ia_100000291.png",
      "/img/ia_100000292.jpg",
      "/img/ia_100000294.jpg",
      "/img/ia_100000295.jpg",
      "/img/ia_100000296.png",
      "/img/ia_100000297.jpg",
      "/img/ia_100000298.jpg",
      "/img/ia_100000290.jpg",
      "/img/ia_100000291.png",
      "/img/ia_100000292.jpg",
      "/img/ia_100000294.jpg",
      "/img/ia_100000295.jpg",
      "/img/ia_100000296.png",
      "/img/ia_100000297.jpg",
      "/img/ia_100000298.jpg",
    ],
    width: 280,
    height: 60,
    slidesPerView: 5,
    autoplayDelay: 800,
  },
];

export default function Carousel() {
  return (
    <div className="w-full my-4 cursor-pointer border-l border-r border-4 border-black">
      {topImgs.map(
        ({ id, data, width, height, slidesPerView, autoplayDelay }) => (
          <Swiper
            key={id}
            slidesPerView={slidesPerView}
            spaceBetween={0}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="mySwiper"
          >
            {data.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={src}
                  width={width}
                  height={height}
                  alt=""
                  className="opacity-50 hover:opacity-95"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )
      )}
    </div>
  );
}
