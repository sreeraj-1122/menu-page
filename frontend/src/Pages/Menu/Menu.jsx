import React, { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import FilterBanner from '../../components/FilterButtons/FilterBanner';
import MenuItems from '../../components/MenuItems/MenuItems';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('DRINKS'); // Default category

  return (
    <div>
      <Banner />
      <FilterBanner setSelectedCategory={setSelectedCategory} />
      <MenuItems category={selectedCategory} />
    </div>
  );
};

export default Menu;
