import "./Footer.css";

import IconHome from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerLogoPlace">
          <img className="footerLogo" src={IconHome} alt="Unique Logo" />
        </div>
        <div className="footerText">
          <p>© 2024 Unique Cats Store</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
