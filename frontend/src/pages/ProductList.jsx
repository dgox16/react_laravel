import {PageLayout} from "../layouts/PageLayout.jsx";
import {useEffect, useState} from "react";
import {getProductsRequest} from "../services/productRequest.js";

export const ProductList = () => {
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
    return (
        <PageLayout>
            {loading ? (
                    <h1>Loading</h1>
                ) :
                products.map((product) => (
                    <div key={product.id}>{product.name}</div>
                ))
            }

        </PageLayout>
    )
}
