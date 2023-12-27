import { FooterImageDark, FooterImageLight } from "../../assets/images";
import "./Footer.scss";

const footerContent = {
  title: "ABOUT OUR FURNITURE",
  description:
    "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.",
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left-side">
        <img src={FooterImageDark} alt="footer-left-side" />
      </div>
      <div className="footer__text-content">
        <h3 className="footer-title">{footerContent.title}</h3>
        <p className="footer-description">{footerContent.description}</p>
      </div>
      <div className="footer__right-side">
        <img src={FooterImageLight} alt="footer-right-side" />
      </div>
    </div>
  );
};

export default Footer;
