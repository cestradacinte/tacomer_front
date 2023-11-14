import "./Footer.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FaFacebookF />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FaTwitter />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="#">
              <FaInstagram />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="#">
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              About
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Services
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Team
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Contact
            </a>
          </li>
          <div>
          <p>&copy;2023 TauroDev |Todos los derechos reservados</p>
          </div>
        </ul>
      </footer>
    </>
  );
};
