import axios from "./axios";

export const getProductsRequest = async (credentials) => {
    const res = await axios.get("/products", credentials);
    return res.data.data;
};
