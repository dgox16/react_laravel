import axios from "./axios";

export const getProductsRequest = async () => {
    const res = await axios.get("/products");
    return res.data.data;
};

export const deleteProductRequest = async (id) => {
    const res = await axios.delete(`/products/${id}`);
    return res.data;
};

export const createProductRequest = async (data) => {
    const res = await axios.post("/products", data);
    return res.data;
};

export const updateProductRequest = async (id, data) => {
    const res = await axios.put(`/products/${id}`, data);
    return res.data;
};
export const getProductRequest = async (id) => {
    const res = await axios.get(`/products/${id}`);
    return res.data;
};

