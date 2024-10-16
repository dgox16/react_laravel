import {PageLayout} from "../layouts/PageLayout.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "../hooks/useForm.js";
import {getProductRequest, updateProductRequest} from "../services/productRequest.js";
import {useEffect} from "react";
import {InputField} from "../components/ui/InputField.jsx";

export const UpdateProduct = () => {
    const {formData, handleChange, setFormData} = useForm({
        name: "",
        price: 0,
        description: "",
    });
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const response = await getProductRequest(id)
            setFormData({
                name: response.data.name,
                price: response.data.price,
                description: response.data.description,
            });
        }
        getProduct()
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await updateProductRequest(id, formData);
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
                    <h1 className="text-3xl font-bold text-zinc-100 mb-5 uppercase">Update product</h1>
                    <form onSubmit={handleSubmit} className={"flex justify-center"}>
                        <div className="">
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
                                    className="p-2 bg-yellow-200 text-yellow-800 w-full font-semibold mt-5 rounded-lg">Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PageLayout>
    )
}