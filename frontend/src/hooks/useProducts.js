import {useEffect, useState} from 'react';
import {getProductsRequest} from "../services/productRequest.js";

export const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            const response = await getProductsRequest()
            setProducts(response)
            setLoading(false)
        }
        getProducts()
    }, []);

    return {products, loading};
};
