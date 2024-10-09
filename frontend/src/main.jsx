import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import {Register} from "./pages/Register.jsx";
import {Login} from "./pages/Login.jsx";

const router = createBrowserRouter([
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/products",
        element: <Login/>,
    },
]);

createRoot(document.getElementById('root')).render(
    <>
        <main>
            <RouterProvider router={router}/>
        </main>
    </>
)
