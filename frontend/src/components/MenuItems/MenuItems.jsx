import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MenuItems.css';
import cocktail from '../../assets/images/cocktail 1.png';
import drink from '../../assets/images/drink final 1.png';

const MenuItems = ({ category }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/menu/items?category=${category}`);
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, [category]);

  return (
    <section className="menu-items">
      <div className="top-corner-images">
        <img src={drink} alt="Left Corner" className="left-image" />
        <img src={cocktail} alt="Right Corner" className="right-image" />
      </div>
      <div className="menu-header">
        <h1>{category.toUpperCase()}</h1>
      </div>
      <div className="menu-grid">
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <div className="menu-item" key={item._id}>
              <div className="menu-item-name">
                <span>{item.name}</span>
                <span className="dots"></span>
                <span className="price">${item.price}</span>
              </div>
              <p className="menu-item-description">{item.description}</p>
            </div>
          ))
        ) : (
          <p>No items available for this category.</p>
        )}
      </div>
    </section>
  );
};

export default MenuItems;
