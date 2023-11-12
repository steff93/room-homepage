import Slide from "../Slide/Slide";
import { slideshowContent } from "./slideshowContent";

const Slideshow = () => {
  return (
    <div className="slideshow-wrapper">
      {slideshowContent.map((slide, index) => {
        return <Slide {...slide} key={index} />;
      })}
    </div>
  );
};

export default Slideshow;
