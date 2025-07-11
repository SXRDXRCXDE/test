import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products?limit=10`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};
