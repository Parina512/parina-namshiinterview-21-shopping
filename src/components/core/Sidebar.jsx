import React, { useEffect, useState } from 'react';
import { getCategories } from './../axios/item-api';

const Sidebar = ({ handleCategoryClick }) => {
  // const categories = ['all', 'bird', 'cat', 'dog', 'fish'];
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    async function getCategoryList() {
      const categories = await getCategories();
      setCategory(categories);
    }
    getCategoryList();
  }, []);

  return (
    <div>
      <div>Categories</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {categories?.map((item) => {
          return (
            <div
              style={{ padding: '5px', textAlign: 'left' }}
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
