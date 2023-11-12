import { ReactComponent as ArrowIcon } from "../../assets/images/icon-arrow.svg";
import { SlideProps } from "../../types";
import "./Slide.scss";

const Slide = ({ title, imageSrc, content }: SlideProps) => {
  return (
    <div className="slide">
      <div className="slide-content">
        <img
          className="slide-content__image"
          src={imageSrc}
          alt="header-slide"
        />
        <div className="slide-content__info">
          <h2 className="slide-content__title">{title}</h2>
          <p className="slide-content__text">{content}</p>

          <a className="slide-content__link" href="#section">
            <span>Shop Now</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slide;
