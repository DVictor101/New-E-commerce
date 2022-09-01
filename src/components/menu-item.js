import React from "react";
import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="background-image"
    />
    <div className="content">
      <p>{title.toUpperCase()}</p>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
export default MenuItem;
