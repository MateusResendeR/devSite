

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const IconCarousel = () => {

  const icons = [
    { id: 1, src: "public/icons/laravel.png", alt: "Laravel" },
    { id: 2, src: "public/icons/php.png", alt: "PHP" },
    { id: 3, src: "public/icons/js.png", alt: "JavaScript" },
    { id: 4, src: "public/icons/typescript.png", alt: "TypeScript" },
    { id: 5, src: "public/icons/sciene.png", alt: "React" },
    { id: 6, src: "public/icons/html.png", alt: "HTML" },
    { id: 7, src: "public/icons/css.png", alt: "CSS" },
  ];
  return (
    <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        loop={true}
        speed={10000}
        spaceBetween={20}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="my-6">
        {icons.map((icon, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={icon.src} alt={icon.alt} className="p-3 md:p-0 md:h-12 md:w-12 object-contain" />
          </SwiperSlide>
        ))}
    </Swiper>);
  };
export default IconCarousel;