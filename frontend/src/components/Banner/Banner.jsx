import React from 'react';
import './Banner.css'; 
const Banner = () => {
  return (
    <section className="banner">
        <div className="logo-name">SOFT</div>
      <div className="banner-content">
        <h1 className="banner-title">MENU</h1>
        <p className="banner-subtitle">Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
      </div>
    </section>
  );
};

export default Banner;
