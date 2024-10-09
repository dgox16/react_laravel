import {ProductItem} from "./ProductItem.jsx";

export const ProductList = ({products, deleteProduct}) => {
    return (
        <div>
            <div className="mt-4">
                <button
                    className="bg-blue-200 mb-2 px-3 py-2 text-sm rounded-lg font-semibold hover:scale-105 transition text-blue-800"
                >New Product
                </button>
            </div>
            {
                products.map((product) => (
                    <ProductItem key={product.id} product={product} deleteProduct={deleteProduct}/>
                ))
            }
        </div>

    )
}