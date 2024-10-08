import {PageLayout} from "../layouts/PageLayout.jsx";
import {useNavigate} from "react-router-dom";
import {useForm} from "../hooks/useForm.js";
import {createProductRequest} from "../services/productRequest.js";

export const NewProduct = () => {
    const navigate = useNavigate();

    const {formData, handleChange} = useForm({
        name: '',
        price: 0,
        description: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await createProductRequest(formData);
            if (res.status) {
                navigate('/products')
            }
        } catch (error) {
            console.log(error.response.data.message)
        }
    }
    return (
        <PageLayout authRequired={true}>
            <div className="flex justify-center items-center h-[calc(100vh-56px)]">
                <div className="text-center w-fit rounded-md bg-gray-100 py-7 px-6 flex justify-center flex-col">
                    <h1 className="text-3xl font-bold text-gray-700 mb-5 uppercase">New product</h1>
                    <form onSubmit={handleSubmit} className={"flex justify-center"}>
                        <div className="">
                            <div className="flex flex-row mt-4">
                                <label htmlFor="name" className="mr-4 text-lg">Name:</label>
                                <input type="text" name="name" className="w-full"
                                       value={formData.name}
                                       onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-row mt-4">
                                <label htmlFor="description" className="mr-4 text-lg">Description:</label>
                                <input type="text" name="description" className="w-full"
                                       value={formData.description}
                                       onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-row mt-4">
                                <label htmlFor="price" className="mr-4 text-lg">Price: </label>
                                <input type="number" name="price" className="w-full"
                                       value={formData.price}
                                       onChange={handleChange}
                                />
                            </div>
                            <button type="submit"
                                    className="p-2 bg-blue-400 w-full font-semibold mt-5 rounded-lg">Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PageLayout>
    )
}