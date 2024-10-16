import {useAuthStore} from "../store/auth.js";
import {useEffect, useState} from "react";
import {validateUserRequest} from "../services/authRequests.js";

export const useValidateUser = () => {
    const {setUser, logout} = useAuthStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            const validateSession = async () => {
                try {
                    const res = await validateUserRequest();
                    setUser(res.data);
                } catch (e) {
                    logout();
                } finally {
                    setLoading(false);
                }
            };
            validateSession();

        },
        []);
    return {loading};
}