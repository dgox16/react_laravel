import {getCsrfToken, loginRequest} from "../services/authRequests.js";
import {useAuthStore} from "../store/auth.js";
import {PageLayout} from "../layouts/PageLayout.jsx";
import {useNavigate} from "react-router-dom";
import {useForm} from "../hooks/useForm.js";


export const Login = () => {
    const navigate = useNavigate();
    const {
        setUser,
    } = useAuthStore();

    const {formData, handleChange} = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await getCsrfToken();
            const res = await loginRequest(formData);
            if (res.status) {
                const {name, email, id} = res.data;
                setUser({id, name, email});
                navigate('/products')
            }
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return (
        <PageLayout>
            <div className="flex justify-center items-center h-[calc(100vh-56px)]">
                <div className="text-center w-fit rounded-md bg-gray-100 py-7 px-6 flex justify-center flex-col">
                    <h1 className="text-3xl font-bold text-gray-700 mb-5 uppercase">Login</h1>
                    <form onSubmit={handleSubmit} className={"flex justify-center"}>
                        <div className="">
                            <div className="flex flex-row mt-4">
                                <label htmlFor="email" className={"mr-4 text-lg"}>Email:</label>
                                <input type={"email"} name="email" className={"w-full"}
                                       value={formData.email}
                                       onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-row mt-4">
                                <label htmlFor="password" className={"mr-4 text-lg"}>Password:</label>
                                <input type="password" name="password" className={"w-full"}
                                       value={formData.password}
                                       onChange={handleChange}
                                />
                            </div>
                            <button type="submit"
                                    className="p-2 bg-blue-400 w-full font-semibold mt-5 rounded-lg">SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PageLayout>
    )
}
