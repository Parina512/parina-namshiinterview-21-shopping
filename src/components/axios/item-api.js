import { axiosGet } from './config';

export async function getCategories() {
  try {
    const res = await axiosGet('products/categories');
    return res;
  } catch (error) {
    console.log('category fetching' + error);
  }
}

export async function getProductForCategory(category) {
  try {
    const res = await axiosGet(`products/category/${category}`);
    console.log('=======res category', res, category);
    return res;
  } catch (error) {
    console.log(`product fetching for ${category}` + error);
  }
}
