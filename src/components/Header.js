import React from "react";
import { CgMenuGridR, CgProfile } from "react-icons/cg";

function Header() {
  return (
    <nav>
      <button className="nav-btn">Gmail</button>
      <button className="nav-btn">Images</button>
      <div className="profile-item-container">
        <CgMenuGridR className="menu-icon" />
      </div>
      <div className="profile-item-container">
        {/* <img src="#" alt="profile" /> */}
        <CgProfile className="profile-image" />
      </div>
    </nav>
  );
}

export default Header;
