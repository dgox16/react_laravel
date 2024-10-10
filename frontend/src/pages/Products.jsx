import {PageLayout} from "../layouts/PageLayout.jsx";
import {useProducts} from "../hooks/useProducts.js";
import {ProductList} from "../components/products/ProductList.jsx";
import {Loader} from "../components/ui/Loader.jsx";

export const Products = () => {
    const {products, loading, deleteProduct} = useProducts();
    return (
        <PageLayout authRequired={true}>
            {
                loading
                    ? <Loader/>
                    : <ProductList products={products} deleteProduct={deleteProduct}/>
            }
        </PageLayout>
    )
}
