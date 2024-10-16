import {RouterProvider} from "react-router-dom";
import {router} from "../router.jsx";
import {useValidateUser} from "../hooks/useValidateUser.js";
import {Loader} from "../components/ui/Loader.jsx";

export const App = () => {
    const {loading} = useValidateUser()
    return (
        loading ?
            <Loader/>
            :
            <RouterProvider router={router}/>
    );
}