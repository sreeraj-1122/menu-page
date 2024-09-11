import React, { useState } from 'react';
import './Filter.css';

const FilterBanner = ({ setSelectedCategory }) => {
  const [activeButton, setActiveButton] = useState('DRINKS');

  const handleButtonClick = (category) => {
    setActiveButton(category);
    setSelectedCategory(category);
  };

  return (
    <section className="filter-banner">
      <div className="filter-banner-content">
        <div className="filter-buttons">
          <button
            className={`filter-button ${activeButton === 'FOOD' ? 'active' : ''}`}
            onClick={() => handleButtonClick('FOOD')}
          >
            FOOD
          </button>
          <button
            className={`filter-button ${activeButton === 'DRINKS' ? 'active' : ''}`}
            onClick={() => handleButtonClick('DRINKS')}
          >
            DRINKS
          </button>
          <button
            className={`filter-button ${activeButton === 'BRUNCH' ? 'active' : ''}`}
            onClick={() => handleButtonClick('BRUNCH')}
          >
            BRUNCH
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterBanner;
