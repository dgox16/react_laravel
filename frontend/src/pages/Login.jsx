import {useState} from "react";
import {getCsrfToken, loginRequest} from "../services/authRequests.js";


export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await getCsrfToken();
            const res = await loginRequest(formData);
            console.log(res.status);
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center w-[400px] rounded-md bg-gray-100 py-7 px-1 flex justify-center flex-col">
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
                                className="p-2 bg-blue-400 w-full font-bold mt-5 rounded-lg">SUBMIT
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}
