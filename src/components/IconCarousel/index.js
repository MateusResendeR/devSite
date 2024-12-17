import { jsx as _jsx } from "react/jsx-runtime";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const IconCarousel = () => {
    const icons = [
        { id: 1, src: "src/assets/icons/laravel.png", alt: "Laravel" },
        { id: 2, src: "src/assets/icons/php.png", alt: "PHP" },
        { id: 3, src: "src/assets/icons/js.png", alt: "JavaScript" },
        { id: 4, src: "src/assets/icons/typescript.png", alt: "TypeScript" },
        { id: 5, src: "src/assets/icons/sciene.png", alt: "React" },
        { id: 6, src: "src/assets/icons/html.png", alt: "HTML" },
        { id: 7, src: "src/assets/icons/css.png", alt: "CSS" },
    ];
    return (_jsx(Swiper, { modules: [Autoplay], slidesPerView: 6, loop: true, speed: 10000, spaceBetween: 20, autoplay: {
            delay: 0,
            disableOnInteraction: false,
        }, className: "my-6", children: icons.map((icon, index) => (_jsx(SwiperSlide, { className: "flex justify-center items-center", children: _jsx("img", { src: icon.src, alt: icon.alt, className: "p-3 md:p-0 md:h-12 md:w-12 object-contain" }) }, index))) }));
};
export default IconCarousel;
