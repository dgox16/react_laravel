import {getCsrfToken, loginRequest} from "../services/authRequests.js";
import {useAuthStore} from "../store/auth.js";
import {PageLayout} from "../layouts/PageLayout.jsx";
import {useNavigate} from "react-router-dom";
import {useForm} from "../hooks/useForm.js";
import {InputField} from "../components/ui/InputField.jsx";


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
                <div className="text-center w-fit rounded-lg bg-zinc-900 py-7 px-6 flex justify-center flex-col">
                    <h1 className="text-3xl font-bold text-zinc-100 mb-5 uppercase">Login</h1>
                    <form onSubmit={handleSubmit} className={"flex justify-center"}>
                        <div>
                            <InputField
                                label={"Email:"}
                                name={"email"}
                                type={"email"}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <InputField
                                label={"Password:"}
                                name={"password"}
                                type={"password"}
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <button type="submit"
                                    className="p-2 bg-green-200 text-green-800 w-full font-semibold mt-5 rounded-lg">Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PageLayout>
    )
}
