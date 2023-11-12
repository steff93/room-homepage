import "./Slide.scss";
import { SlideProps } from "./slideTypes";

import { ReactComponent as ArrowIcon } from "../../assets/images/icon-arrow.svg";

const Slide = (props: SlideProps) => {
  const { upper, footer } = props;

  return (
    <div className="slide">
      <div className="slide-content">
        <img
          className="slide-content__image"
          src={upper.imageSrc}
          alt="header-slide"
        />
        <div className="slide-content__info">
          <h2 className="slide-content__title">{upper.title}</h2>
          <p className="slide-content__text">{upper.content}</p>

          <a className="slide-content__link" href="#section">
            <span>Show Now</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="slide-footer">
        <img src={props.footer.leftImageSrc} alt="slide-footer-left" />
        <div className="slide-footer__content">
          <h3 className="slide-footer__title">{footer.title}</h3>
          <p className="slide-footer__content">{footer.content}</p>
        </div>

        <img alt="slide-footer-right" src={footer.rightImageSrc} />
      </div>
    </div>
  );
};

export default Slide;
