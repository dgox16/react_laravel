import {PageLayout} from "../layouts/PageLayout.jsx";
import {useNavigate} from "react-router-dom";
import {useForm} from "../hooks/useForm.js";
import {createProductRequest} from "../services/productRequest.js";
import {InputField} from "../components/ui/InputField.jsx";

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
                <div className="text-center w-fit rounded-md bg-zinc-900 py-7 px-6 flex justify-center flex-col">
                    <h1 className="text-3xl font-bold text-zinc-100 mb-5 uppercase">New product</h1>
                    <form onSubmit={handleSubmit} className={"flex justify-center"}>
                        <div>
                            <InputField
                                label={"Name:"}
                                name={"name"}
                                type={"text"}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <InputField
                                label={"Description:"}
                                name={"description"}
                                type={"text"}
                                value={formData.description}
                                onChange={handleChange}
                            />
                            <InputField
                                label={"Price:"}
                                name={"price"}
                                type={"number"}
                                value={formData.price}
                                onChange={handleChange}
                            />
                            <button type="submit"
                                    className="p-2 bg-blue-200 w-full font-semibold mt-5 rounded-lg text-blue-800">Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PageLayout>
    )
}