import React from "react";
import LogoLight2x from "../../images/webmall-logo.jpg";
import LogoDark2x from "../../images/webmall-logo.jpg";
import LogoSmall from "../../images/webmall-logo.jpg";
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
      {/* <img className="logo-light logo-img" src={LogoLight2x} alt="logo" />
      <img className="logo-dark logo-img" src={LogoDark2x} alt="logo" />
      <img className="logo-small logo-img logo-img-small" src={LogoSmall} alt="logo" /> */}
      <h5 className="nk-menu-text lg">Belkins Store Inventory</h5>
    </Link>
  );
};

export default Logo;
