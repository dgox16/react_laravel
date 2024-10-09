import axios from "./axios";

export const getProductsRequest = async () => {
    const res = await axios.get("/products");
    return res.data.data;
};

export const deleteProductRequest = async (id) => {
    const res = await axios.delete(`/products/${id}`);
    return res.data;
};
