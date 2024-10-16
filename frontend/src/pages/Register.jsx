import {registerRequest} from "../services/authRequests.js";
import {PageLayout} from "../layouts/PageLayout.jsx";
import {useForm} from "../hooks/useForm.js";
import {useNavigate} from "react-router-dom";
import {InputField} from "../components/ui/InputField.jsx";


export const Register = () => {
    const navigate = useNavigate();
    const {formData, handleChange} = useForm({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerRequest(formData);
            navigate('/products')
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return (
        <PageLayout>
            <div className="flex justify-center items-center h-[calc(100vh-56px)]">
                <div className="text-center w-fit rounded-md bg-zinc-900 py-7 px-6 flex justify-center flex-col">
                    <h1 className="text-3xl font-bold text-zinc-200 mb-5 uppercase">Register</h1>
                    <form onSubmit={handleSubmit} className="flex justify-center">
                        <div>
                            <InputField
                                label={"Name:"}
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
                                    className="p-2 bg-purple-200 text-purple-800 w-full font-semibold mt-5 rounded-lg">Submit
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </PageLayout>
    )
}
