import "./Banner.css";

import PhoneImg from "../../assets/img/phone.png";

const Banner = () => {
  return (
    <>
      <div className="mainBanner">
        <div className="phone">
          <img className="imgPhone" src={PhoneImg} alt="HelpUsEmoji" />
        </div>

        <div className="left">
          <h1 className="text">Help Us</h1>
          <p className="text">every call helps</p>
        </div>

        <div className="right">
          <h3>912345678</h3>
        </div>
      </div>
    </>
  );
};

export default Banner;
