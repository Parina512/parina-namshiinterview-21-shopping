import React from 'react';
import Product from './Product';

const List = ({ productList }) => {
  return (
    <div>
      <div>Products </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {productList.map((item) => {
          return <Product item={item} />;
        })}
      </div>
    </div>
  );
};

export default List;
