import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Gallery = () => {
  const images = [
    { url: "./2.jpg", alt: "image 1" },
    { url: "./bg.webp", alt: "image 2" },
    { url: "./background.jpeg", alt: "image 3" },
  ];

  return (
    <>
      <h1 className="p-4 text-center text-4xl">Gallery</h1>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full sm:w-1/2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="object-cover">
            <img src={image.url} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Gallery;
