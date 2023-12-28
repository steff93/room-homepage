import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import Slide from "../Slide/Slide";
import "./Slideshow.scss";
import { slideshowContent } from "./slideshowContent";

import { ReactComponent as ArrowPrev } from "../../assets/images/icon-angle-left.svg";
import { ReactComponent as ArrowNext } from "../../assets/images/icon-angle-right.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Slideshow = () => {
  return (
    <div className="slideshow-wrapper">
      <Swiper
        slidesPerView={1}
        modules={[Navigation]}
        loop={true}
        autoHeight={true}
        navigation={{
          nextEl: ".slideshow-navigation--next",
          prevEl: ".slideshow-navigation--prev",
        }}
      >
        {slideshowContent.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Slide {...slide} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="slideshow-navigation">
        <span className="slideshow-navigation--prev">
          <ArrowPrev />
        </span>
        <span className="slideshow-navigation--next">
          <ArrowNext />
        </span>
      </div>
    </div>
  );
};

export default Slideshow;
