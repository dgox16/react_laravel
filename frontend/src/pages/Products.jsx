import {PageLayout} from "../layouts/PageLayout.jsx";
import {useProducts} from "../hooks/useProducts.js";
import {ProductList} from "../components/products/ProductList.jsx";

export const Products = () => {
    const {products, loading} = useProducts();
    return (
        <PageLayout>
            {loading ? (
                <h1>Loading</h1>
            ) : <ProductList products={products}/>
            }

        </PageLayout>
    )
}
