import React from "react";
import { Logo, Linkedin, Github, Email } from "@assets";
import "./footer.scss";

const Icon = ({ src }) => (
  <div className="icon-wrapper">
    <img className="icon-medsos" src={src} alt="" />
  </div>
);

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="social-wrapper">
          <Icon src={Linkedin} />
          <Icon src={Github} />
          <Icon src={Email} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
