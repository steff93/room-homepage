import slideImage1 from "../../assets/images/desktop-image-hero-1.jpg";
import { SlideProps } from "../Slide/slideTypes";

export const slideshowContent: SlideProps[] = [
  {
    upper: {
      imageSrc: slideImage1,
      title: "Discover Innovative ways to decorate",
      content:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      link: "Shop Now",
    },
    footer: {
      leftImageSrc: "",
      title: "ABOUT OUR FURNITURE",
      content:
        "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space",
      rightImageSrc: ".",
    },
  },
];
