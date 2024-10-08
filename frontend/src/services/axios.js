import axios from "axios";

const baseUrl =
    process.env.NODE_ENV === "production"
        ? "https://penguin-movies-production.up.railway.app/api/"
        : "http://localhost:8000/api";

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    withXSRFToken: true
});

export default instance;