import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import {Register} from "./pages/Register.jsx";
import {Login} from "./pages/Login.jsx";
import {ProductList} from "./pages/ProductList.jsx";

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
        element: <ProductList/>,
    },
]);

createRoot(document.getElementById('root')).render(
    <>
        <main>
            <RouterProvider router={router}/>
        </main>
    </>
)
