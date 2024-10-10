import {useEffect, useState} from 'react';
import {deleteProductRequest, getProductsRequest} from "../services/productRequest.js";
import {useAuthStore} from "../store/auth.js";

export const useProducts = () => {
    const {
        user
    } = useAuthStore();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (user) {
            const getProducts = async () => {
                const response = await getProductsRequest()
                setProducts(response)
                setLoading(false)
            }
            getProducts()
        }
    }, []);

    const deleteProduct = async (id) => {
        const response = await deleteProductRequest(id)
        if (response.status) {
            setProducts(products.filter(product => product.id !== id))
        }
    }

    return {products, loading, deleteProduct};
};
