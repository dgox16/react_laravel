import {useAuthStore} from "../../store/auth.js";
import {logoutRequest} from "../../services/authRequests.js";
import {Link, useNavigate} from "react-router-dom";

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
        <nav className="h-14 bg-zinc-900 flex items-center justify-center">
            <div className="w-[900px]">
                <div className="flex justify-between items-center">
                    <div className="text-lg text-zinc-200 font-bold">
                        {user ? `Welcome, ${user.name}` : "LARAVEL - REACT"}
                    </div>
                    {user ? (
                            <button
                                className="bg-pink-200 px-3 py-2 rounded-lg font-semibold hover:scale-105 transition text-pink-800"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        ) :
                        (
                            <div>
                                <Link
                                    className="bg-purple-200 px-3 py-2 rounded-lg font-semibold hover:scale-105 transition text-purple-800 mr-3"
                                    to={"/register"}>
                                    Register
                                </Link>
                                <Link
                                    className="bg-green-200 px-3 py-2 rounded-lg font-semibold hover:scale-105 transition text-green-800"
                                    to={"/login"}>
                                    Log In
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}
