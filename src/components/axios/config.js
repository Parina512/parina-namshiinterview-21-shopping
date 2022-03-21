import axios from 'axios';

// we can add this in env
const BASE_URL = `https://fakestoreapi.com/`;

export const axiosGet = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}${url}`);
    if (response?.status === 200 && response?.data) {
      return response?.data;
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const axiosPost = async (url, payload) => {
  try {
    const response = await axios.post(`${BASE_URL}${url}`, payload);
    if (response?.data) {
      return response.data;
    }
    return response;
  } catch (error) {
    throw error;
  }
};
