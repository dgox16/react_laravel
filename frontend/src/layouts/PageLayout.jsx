import {Navbar} from "../components/layout/Navbar.jsx";
import {useAuthStore} from "../store/auth.js";
import {Navigate} from "react-router-dom";

export const PageLayout = ({children, authRequired = false}) => {
    const {user} = useAuthStore();

    if (authRequired && !user) {
        return <Navigate to="/login" replace/>;
    }

    return <>
        <Navbar/>
        <main className="flex justify-center bg-zinc-800">
            <div className="w-[900px]">
                {children}
            </div>
        </main>
    </>;
}
