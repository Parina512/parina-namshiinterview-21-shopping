import React, { useState } from 'react';
import { getProductForCategory } from './../axios/item-api';
import Cart from './Cart';
import List from './List';
import Sidebar from './Sidebar';

const Layout = () => {
  const [productList, setProductList] = useState([]);
  const handleCategoryClick = async (item) => {
    const res = await getProductForCategory(item);
    setProductList(res);
  };
  return (
    <>
      <div style={{ backgroundColor: 'red', fontSize: '20px', padding: '5px' }}>
        Pet shop
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
        }}
      >
        <Sidebar handleCategoryClick={handleCategoryClick} />
        <List productList={productList} />
        <Cart />
      </div>
    </>
  );
};

export default Layout;
