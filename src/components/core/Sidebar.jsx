import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryList, updateItemList } from '../actions/item-actions';
import '../core/css/Sidebar.css';
import { getCategories, getProductForCategory } from './../axios/item-api';
import List from './List';

const Sidebar = () => {
  const categories = useSelector((store) => store?.item?.categoryList ?? []);
  const productList = useSelector(
    (store) => store?.item?.selectedCategoryProducts ?? []
  );
  console.log(productList, '=======');
  const [selCategories, setSelCategory] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getCategoryList() {
      const categories = await getCategories();
      dispatch(addCategoryList(categories));
    }
    getCategoryList();
  }, []);

  const fetchProductData = async (category) => {
    console.log('========here');
    const res = await getProductForCategory(category);
    dispatch(updateItemList(res));
  };
  return (
    <>
      <div class='tab'>
        {categories?.map((category, index) => {
          return (
            <button
              class='tablinks'
              onClick={() => {
                fetchProductData(category);
                setSelCategory(index);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div id={selCategories} class='tabcontent'>
        <List productList={productList} />
      </div>
    </>
  );

  // return (
  //   <div>
  //     <div>Categories</div>
  //     <div style={{ display: 'flex', flexDirection: 'column' }}>
  //       {categories?.map((item) => {
  //         return (
  //           <div
  //             style={{ padding: '5px', textAlign: 'left' }}
  //             onClick={() => handleCategoryClick(item)}
  //           >
  //             {item}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};

export default Sidebar;
