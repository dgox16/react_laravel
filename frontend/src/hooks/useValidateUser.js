import {useAuthStore} from "../store/auth.js";
import {useEffect, useState} from "react";
import {validateUserRequest} from "../services/authRequests.js";

export const useValidateUser = () => {
    const {setUser, logout} = useAuthStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            try {
                const validateSession = async () => {
                    const res = await validateUserRequest()
                    setUser(res)
                }
                validateSession()
            } catch (e) {
                logout()
            } finally {
                setLoading(false)
            }
        },
        []);
    return {loading};
}