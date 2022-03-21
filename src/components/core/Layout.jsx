import React from 'react';
import Cart from './Cart';
import Sidebar from './Sidebar';

const Layout = () => {
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
        <Sidebar />
        <Cart />
      </div>
    </>
  );
};

export default Layout;
