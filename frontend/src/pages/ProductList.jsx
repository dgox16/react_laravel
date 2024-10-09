import {PageLayout} from "../layouts/PageLayout.jsx";
import {useProducts} from "../hooks/useProducts.js";

export const ProductList = () => {
    const {products, loading} = useProducts();
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
