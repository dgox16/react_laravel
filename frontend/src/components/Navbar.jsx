import {useAuthStore} from "../store/auth.js";

export const Navbar = () => {
    const {
        user,
    } = useAuthStore();

    const handleLogout = () => {
        console.log("logout");
    }

    return (
        <div className="h-14 bg-gray-200 flex items-center justify-center">
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
