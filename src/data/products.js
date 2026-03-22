const API_URL = "https://ams-jersey-city-production.up.railway.app/api/products";

let products = [];

export async function fetchProducts() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    products = data;
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export default products;