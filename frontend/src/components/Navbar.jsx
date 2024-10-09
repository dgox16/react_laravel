import {useAuthStore} from "../store/auth.js";
import {logoutRequest} from "../services/authRequests.js";

export const Navbar = () => {
    const {
        user,
        logout
    } = useAuthStore();

    const handleLogout = async () => {
        const res = await logoutRequest()
        if (res.status) {
            logout()
        }
    }

    return (
        <div className="h-14 bg-gray-100 flex items-center justify-center">
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
        </div>
    )
}
