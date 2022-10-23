import React from "react";

import logo from "../assets/airbnb-logo.png"

const Navbar = () => {
  return (
    <nav>
      <img className="nav--logo" src={logo} alt="airbnb_logo" />
    </nav>
  );
};

export default Navbar;
