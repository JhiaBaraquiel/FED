import React from "react";
import headerImg from "../images/header-img.png";
import '../App.css'; // Import the CSS file
 
 
 
function HeaderComponent() {
  return (
    <div className="header">
      <img src={headerImg} height={50} width={200} alt="header" />
      <div className="discount-banner">
      </div>
    </div>
  );
}
 
export default HeaderComponent;