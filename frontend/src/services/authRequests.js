import axios from "./axios";

export const getCsrfToken = async () => {
    await axios.get('/sanctum/csrf-cookie');
};

export const registerRequest = async (credentials) => {
    const res = await axios.post("/register", credentials);
    return res.data;
};

export const loginRequest = async (credentials) => {
    const res = await axios.post("/login", credentials);
    return res.data;
};

export const logoutRequest = async (credentials) => {
    const res = await axios.get("/logout", credentials);
    return res.data;
};


export const validateUserRequest = async () => {
    const res = await axios.get("/user")
    return res.data;
}
