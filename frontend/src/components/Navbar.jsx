import {useAuthStore} from "../store/auth.js";
import {logoutRequest} from "../services/authRequests.js";
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const {
        user,
        logout
    } = useAuthStore();

    const handleLogout = async () => {
        const res = await logoutRequest()
        if (res.status) {
            logout()
            navigate('/login')
        }
    }

    return (
        <nav className="h-14 bg-gray-100 flex items-center justify-center">
            <div className="w-[900px]">
                <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">
                        {user ? `Welcome, ${user.name}` : "Welcome"}
                    </div>
                    {user && (
                        <button
                            className="bg-red-500 px-3 py-2 rounded-lg font-semibold hover:scale-105 transition text-white"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}
