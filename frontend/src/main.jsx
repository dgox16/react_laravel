import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import {Register} from "./pages/Register.jsx";
import {Login} from "./pages/Login.jsx";
import {Navbar} from "./components/Navbar.jsx";

const router = createBrowserRouter([
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
]);

createRoot(document.getElementById('root')).render(
    <>
        <nav>
            <Navbar/>
        </nav>
        <main>
            <RouterProvider router={router}/>
        </main>
    </>
)
