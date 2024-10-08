import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import {Register} from "./pages/Register.jsx";

const router = createBrowserRouter([
    {
        path: "/register",
        element: <Register/>,
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
