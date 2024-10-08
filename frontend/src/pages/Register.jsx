import {registerRequest} from "../services/authRequests.js";
import {PageLayout} from "../layouts/PageLayout.jsx";
import {useForm} from "../hooks/useForm.js";
import {useNavigate} from "react-router-dom";


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
                <div className="text-center w-fit rounded-md bg-gray-100 py-7 px-6 flex justify-center flex-col">
                    <h1 className="text-3xl font-bold text-gray-700 mb-5 uppercase">Register</h1>
                    <form onSubmit={handleSubmit} className="flex justify-center">
                        <div>
                            <div className="flex flex-row mt-4">
                                <label htmlFor="email" className="mr-4 text-lg">Email:</label>
                                <input type="email" required={true} name="email" className="w-full"
                                       value={formData.email}
                                       onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-row mt-4">
                                <label htmlFor="name" className="mr-4 text-lg">Name:</label>
                                <input type="text" required={true} name="name" className="w-full"
                                       value={formData.name}
                                       onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-row mt-4">
                                <label htmlFor="password" className="mr-4 text-lg">Password:</label>
                                <input type="password" required={true} name="password" className="w-full"
                                       value={formData.password}
                                       onChange={handleChange}
                                />
                            </div>
                            <button type="submit"
                                    className="p-2 bg-purple-300 text-purple-800 w-full font-semibold mt-5 rounded-lg">Submit
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </PageLayout>
    )
}
