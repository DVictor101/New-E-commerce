import React from "react";
import "./homepage.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <p>HATS</p>
          <span>SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <p>JACKETS</p>
          <span>SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <p>SNEAKERS</p>
          <span>SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <p className="title">TOPS</p>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <p>SHOTS</p>
          <span>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
