import {createBrowserRouter} from "react-router-dom";
import {Register} from "./pages/Register.jsx";
import {Login} from "./pages/Login.jsx";
import {Products} from "./pages/Products.jsx";
import {NewProduct} from "./pages/NewProduct.jsx";

export const router = createBrowserRouter([
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
        element: <Products/>,
    },
    {
        path: "/products/new",
        element: <NewProduct/>,
    },
]);

