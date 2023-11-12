import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "../Slide/Slide";
import { slideshowContent } from "./slideshowContent";

// Import Swiper styles
import "swiper/css";

const Slideshow = () => {
  return (
    <div className="slideshow-wrapper">
      <Swiper slidesPerView={1}>
        {slideshowContent.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Slide {...slide} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slideshow;
