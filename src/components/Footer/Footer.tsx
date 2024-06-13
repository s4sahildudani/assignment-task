import React from "react";
import "./Footer.css";
import smartLightLogo from "../../images/smart_LightLogo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footerTop">
        <img src={smartLightLogo} alt="Logo" className="footerLogo" />
        <div className="footerTopRight">
          <p className="footerTopText">Product</p>
          <p className="footerTopText">Software Services</p>
          <p className="footerTopText">Follow us</p>
        </div>
      </div>
      <hr className="footerDivider" />
      <div className="footerBottom">
        <p className="footerBottomText">Privacy Policy</p>
        <span className="footerVerticalLine"></span>
        <p className="footerBottomText">Terms & Conditions</p>
        <span className="footerVerticalLine"></span>
        <p className="footerBottomText">Cookie Policy</p>
      </div>
    </div>
  );
}

export default Footer;