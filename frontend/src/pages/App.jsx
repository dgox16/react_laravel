import {RouterProvider} from "react-router-dom";
import {router} from "../router.jsx";
import {useValidateUser} from "../hooks/useValidateUser.js";

export const App = () => {
    const {loading} = useValidateUser()

    return (
        loading ? (
            <h1>Loading</h1>
        ) : (
            <RouterProvider router={router}/>
        )
    );
}