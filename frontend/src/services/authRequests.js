import axios from "./axios";

export const registerRequest = async (credentials) => {
    const res = await axios.post("/register", credentials);
    return res.data;
};