import axios from "axios";

const CONSUMER_SECRET = "cs_bd45f75058ee51aa277b50115b6bf9ab61416482";
const CONSUMER_KEY = "ck_d3f818f4910619c28fa8b2ed8f8d3ac81ebcdfd6";
const API_URL = `https://pranaair.com/wp-json/wc/v3/products?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
